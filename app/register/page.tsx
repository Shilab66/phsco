"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ChevronRight, ChevronLeft, AlertCircle } from "lucide-react"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { registerUser, type FormState } from "../actions/register"

// Submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center ml-auto px-6 py-2 bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? "Submitting..." : "Submit Registration"}
    </button>
  )
}

export default function Register() {
  const [step, setStep] = useState(1)
  const initialState: FormState = {}
  const [state, formAction] = useActionState(registerUser, initialState)

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4))
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const steps = [
    { number: 1, title: "Personal Info" },
    { number: 2, title: "Team Details" },
    { number: 3, title: "Additional Info" },
    { number: 4, title: "Review" },
  ]

  // Field error helper
  const getFieldError = (fieldName: string) => {
    return state.errors?.[fieldName]?.[0]
  }

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-gold-400 mb-4">Register</h1>
        <p className="text-xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget.
        </p>
      </motion.div>

      {!state.success ? (
        <div className="bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((s) => (
                <div key={s.number} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                      step >= s.number ? "bg-gold-500 text-gray-900" : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {step > s.number ? <CheckCircle2 size={16} /> : s.number}
                  </div>
                  <div className={`text-sm hidden md:block ${step >= s.number ? "text-gold-400" : "text-gray-500"}`}>
                    {s.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 h-1 bg-gray-700 w-full rounded"></div>
              <motion.div
                className="absolute top-0 left-0 h-1 bg-gold-500 rounded"
                initial={{ width: "0%" }}
                animate={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </div>

          {/* Form error message */}
          {state.message && !state.success && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg flex items-start gap-3">
              <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
              <div>
                <p className="text-red-400 font-medium">{state.message}</p>
                {state.errors && Object.keys(state.errors).length > 0 && (
                  <ul className="list-disc list-inside mt-2 text-sm text-red-300">
                    {Object.entries(state.errors).map(([field, errors]) => (
                      <li key={field}>{errors[0]}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          <form action={formAction}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-semibold text-gold-300 mb-4">Personal Information</h2>
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-300">
                      Full Name <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full p-3 rounded bg-gray-700 text-white border ${
                        getFieldError("name") ? "border-red-500" : "border-gray-600"
                      } focus:border-gold-400 focus:outline-none`}
                      required
                    />
                    {getFieldError("name") && <p className="mt-1 text-sm text-red-400">{getFieldError("name")}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-300">
                      Email <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full p-3 rounded bg-gray-700 text-white border ${
                        getFieldError("email") ? "border-red-500" : "border-gray-600"
                      } focus:border-gold-400 focus:outline-none`}
                      required
                    />
                    {getFieldError("email") && <p className="mt-1 text-sm text-red-400">{getFieldError("email")}</p>}
                  </div>
                  <div>
                    <label htmlFor="organization" className="block mb-2 text-gray-300">
                      Organization <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className={`w-full p-3 rounded bg-gray-700 text-white border ${
                        getFieldError("organization") ? "border-red-500" : "border-gray-600"
                      } focus:border-gold-400 focus:outline-none`}
                      required
                    />
                    {getFieldError("organization") && (
                      <p className="mt-1 text-sm text-red-400">{getFieldError("organization")}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="role" className="block mb-2 text-gray-300">
                      Role <span className="text-gold-400">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      className={`w-full p-3 rounded bg-gray-700 text-white border ${
                        getFieldError("role") ? "border-red-500" : "border-gray-600"
                      } focus:border-gold-400 focus:outline-none`}
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="role1">Role 1</option>
                      <option value="role2">Role 2</option>
                      <option value="role3">Role 3</option>
                      <option value="role4">Role 4</option>
                    </select>
                    {getFieldError("role") && <p className="mt-1 text-sm text-red-400">{getFieldError("role")}</p>}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-semibold text-gold-300 mb-4">Team Details</h2>
                  <div>
                    <label htmlFor="teamName" className="block mb-2 text-gray-300">
                      Team Name <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="teamName"
                      name="teamName"
                      className={`w-full p-3 rounded bg-gray-700 text-white border ${
                        getFieldError("teamName") ? "border-red-500" : "border-gray-600"
                      } focus:border-gold-400 focus:outline-none`}
                      required
                    />
                    {getFieldError("teamName") && (
                      <p className="mt-1 text-sm text-red-400">{getFieldError("teamName")}</p>
                    )}
                  </div>
                  <div className="space-y-4">
                    <label className="block mb-2 text-gray-300">
                      Team Members <span className="text-gold-400">*</span>
                    </label>
                    <p className="text-sm text-gray-400 mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    {[0, 1, 2].map((index) => (
                      <input
                        key={index}
                        type="text"
                        name={`teamMember${index}`}
                        placeholder={`Team Member ${index + 1}`}
                        className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-gold-400 focus:outline-none mb-2"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies
                      tincidunt.
                    </p>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-semibold text-gold-300 mb-4">Additional Information</h2>
                  <div>
                    <label htmlFor="experience" className="block mb-2 text-gray-300">
                      Experience Level
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-gold-400 focus:outline-none"
                    >
                      <option value="">Select Experience Level</option>
                      <option value="level1">Level 1</option>
                      <option value="level2">Level 2</option>
                      <option value="level3">Level 3</option>
                      <option value="level4">Level 4</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="referral" className="block mb-2 text-gray-300">
                      How did you hear about us?
                    </label>
                    <select
                      id="referral"
                      name="referral"
                      className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-gold-400 focus:outline-none"
                    >
                      <option value="">Select Option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      <option value="option4">Option 4</option>
                      <option value="option5">Option 5</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex items-start mt-4">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      className={`mt-1 mr-2 ${getFieldError("agreeToTerms") ? "ring-2 ring-red-500" : ""}`}
                      required
                    />
                    <label htmlFor="agreeToTerms" className="text-gray-300 text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-gold-400 hover:underline">
                        terms and conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-gold-400 hover:underline">
                        privacy policy
                      </a>
                      . <span className="text-gold-400">*</span>
                    </label>
                  </div>
                  {getFieldError("agreeToTerms") && (
                    <p className="mt-1 text-sm text-red-400">{getFieldError("agreeToTerms")}</p>
                  )}
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-gold-300 mb-4">Review Your Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gold-400">Personal Information</h3>
                        <p className="mt-2">
                          Please review your information carefully before submitting. All fields marked with an asterisk
                          (*) are required.
                        </p>
                      </div>
                      <div className="bg-gray-700/50 p-4 rounded-lg">
                        <p className="text-sm text-gray-300">
                          By clicking "Submit Registration", you confirm that all provided information is accurate and
                          you agree to our terms and conditions.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gold-400">What Happens Next?</h3>
                        <p className="mt-2">
                          After submitting your registration, you will receive a confirmation email with further
                          details. If you have any questions, please contact us at contact@example.com.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <ChevronLeft size={16} className="mr-1" /> Back
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center ml-auto px-6 py-2 bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold rounded-lg transition-colors"
                >
                  Next <ChevronRight size={16} className="ml-1" />
                </button>
              ) : (
                <SubmitButton />
              )}
            </div>
          </form>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 text-center"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-green-500" />
          </div>
          <h2 className="text-2xl font-semibold text-gold-300 mb-4">Registration Successful!</h2>
          <p className="text-gray-300 mb-6">
            Thank you for registering! We've sent a confirmation email to your provided email address with all the
            details.
          </p>
          <div className="bg-gray-700/50 p-4 rounded-lg inline-block">
            <p className="text-sm text-gray-300">
              Your registration ID:{" "}
              <span className="text-gold-400 font-mono">
                {state.registrationId ||
                  `REG-${Math.floor(Math.random() * 10000)
                    .toString()
                    .padStart(4, "0")}`}
              </span>
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
