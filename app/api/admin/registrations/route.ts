import { type NextRequest, NextResponse } from "next/server"
import { redis } from "@/lib/redis"

// This would typically be protected by authentication
export async function GET(request: NextRequest) {
  try {
    // Get the list of registration IDs
    const registrationIds = await redis.lrange("registrations", 0, -1)

    // If there are no registrations, return an empty array
    if (!registrationIds || registrationIds.length === 0) {
      return NextResponse.json({ registrations: [] })
    }

    // Get the registration data for each ID
    const registrationsPromises = registrationIds.map(async (id) => {
      const data = await redis.get(`registration:${id}`)
      return data
    })

    const registrations = await Promise.all(registrationsPromises)

    // Filter out any null values and parse JSON
    const validRegistrations = registrations
      .filter(Boolean)
      .map((reg) => (typeof reg === "string" ? JSON.parse(reg) : reg))

    return NextResponse.json({
      registrations: validRegistrations,
      count: validRegistrations.length,
    })
  } catch (error) {
    console.error("Error fetching registrations:", error)
    return NextResponse.json({ error: "Failed to fetch registrations" }, { status: 500 })
  }
}
