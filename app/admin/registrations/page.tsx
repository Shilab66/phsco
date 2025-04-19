"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Registration {
  name: string
  email: string
  organization: string
  role: string
  teamName: string
  teamMembers: (string | null)[]
  registrationId: string
  submittedAt: string
}

export default function AdminRegistrations() {
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const response = await fetch("/api/admin/registrations")

        if (!response.ok) {
          throw new Error("Failed to fetch registrations")
        }

        const data = await response.json()
        setRegistrations(data.registrations || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchRegistrations()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-400"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 my-4">
        <h2 className="text-xl font-bold text-red-400">Error</h2>
        <p className="text-red-300">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-gold-400 mb-4">Registrations</h1>
        <p className="text-xl text-gray-300">View all registrations submitted through the form.</p>
      </motion.div>

      {registrations.length === 0 ? (
        <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
          <p className="text-gray-400">No registrations found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-300">Total registrations: {registrations.length}</p>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-3 text-left text-gold-400">ID</th>
                  <th className="px-4 py-3 text-left text-gold-400">Name</th>
                  <th className="px-4 py-3 text-left text-gold-400">Email</th>
                  <th className="px-4 py-3 text-left text-gold-400">Team</th>
                  <th className="px-4 py-3 text-left text-gold-400">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg, index) => (
                  <tr
                    key={reg.registrationId}
                    className={`border-b border-gray-700 ${index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-800/30"}`}
                  >
                    <td className="px-4 py-3 font-mono text-sm">{reg.registrationId}</td>
                    <td className="px-4 py-3">{reg.name}</td>
                    <td className="px-4 py-3">{reg.email}</td>
                    <td className="px-4 py-3">{reg.teamName}</td>
                    <td className="px-4 py-3 text-sm">{new Date(reg.submittedAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
