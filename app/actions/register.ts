"use server"

import { z } from "zod"
import { redis } from "@/lib/redis"
import { v4 as uuidv4 } from "uuid"

// Define the form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  organization: z.string().min(2, { message: "Organization must be at least 2 characters" }),
  role: z.string().min(1, { message: "Please select a role" }),
  teamName: z.string().min(2, { message: "Team name must be at least 2 characters" }),
  teamMembers: z.array(z.string().optional()),
  experience: z.string().optional(),
  referral: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, { message: "You must agree to the terms and conditions" }),
})

export type FormState = {
  errors?: {
    [key: string]: string[]
  }
  message?: string
  success?: boolean
  registrationId?: string
}

export async function registerUser(prevState: FormState, formData: FormData): Promise<FormState> {
  // Convert FormData to a plain object
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    organization: formData.get("organization"),
    role: formData.get("role"),
    teamName: formData.get("teamName"),
    teamMembers: [formData.get("teamMember0"), formData.get("teamMember1"), formData.get("teamMember2")],
    experience: formData.get("experience"),
    referral: formData.get("referral"),
    agreeToTerms: formData.get("agreeToTerms") === "on",
  }

  // Validate the form data
  const validationResult = formSchema.safeParse(rawFormData)

  if (!validationResult.success) {
    // Return validation errors
    return {
      errors: validationResult.error.flatten().fieldErrors,
      message: "Please fix the errors in the form",
      success: false,
    }
  }

  try {
    // Generate a unique registration ID
    const registrationId = `REG-${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0")}`

    // Generate a unique ID for the Redis key
    const submissionId = uuidv4()

    // Add timestamp to the submission data
    const submissionData = {
      ...validationResult.data,
      registrationId,
      submittedAt: new Date().toISOString(),
    }

    // Store the submission in Redis
    // 1. Store the full submission data
    await redis.set(`registration:${submissionId}`, JSON.stringify(submissionData))

    // 2. Add to a list of all registrations
    await redis.lpush("registrations", submissionId)

    // 3. Create an index by email for easy lookup
    await redis.set(`registration:email:${validationResult.data.email}`, submissionId)

    // 4. Add to a set of team names for uniqueness checking
    await redis.sadd("teamNames", validationResult.data.teamName)

    console.log("Registration stored in Redis with ID:", submissionId)

    return {
      success: true,
      message: "Registration submitted successfully!",
      registrationId,
    }
  } catch (error) {
    console.error("Error submitting registration:", error)
    return {
      success: false,
      message: "There was an error submitting your registration. Please try again.",
    }
  }
}
