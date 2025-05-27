"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Monitor, Wifi, Clock, ExternalLink } from "lucide-react"

// Banner component that spans the full width
const FullWidthBanner = () => {
  return (
    <div className="relative w-full h-48 md:h-64 bg-gray-800 overflow-hidden -mt-8 mb-12">
      {/* Banner background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>

      {/* Optional: Pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 191, 26, 0.2) 2px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Banner content */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gold-400 mb-2 text-center">
          PHSCO Virtual Competition 2025
        </h2>
        <p className="text-xl text-gray-300 text-center max-w-2xl">
          Join us online for an exciting programming challenge on HackerRank from anywhere in the world
        </p>
      </div>
    </div>
  )
}

// Timeline component
const Timeline = () => {
  const events = [
    {
      time: "12:00 PM",
      title: "Opening Ceremony",
      description: "Welcome session and competition overview",
    },
    {
      time: "12:30 PM",
      title: "Practice Submission",
      description: "Test the platform and practice submitting solutions",
    },
    {
      time: "1:00 PM",
      title: "Competition Begins",
      description: "3-hour programming competition starts",
    },
    {
      time: "4:00 PM",
      title: "Competition Ends",
      description: "Final submissions due - no late submissions accepted",
    },
    {
      time: "5:00 PM",
      title: "Results & Awards",
      description: "Final results announcement and awards ceremony",
    },
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[22px] top-6 bottom-6 w-[2px] bg-gold-500/30" />

      <div className="space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex gap-4"
          >
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-gray-800 border-2 border-gold-500 z-10 relative mt-1" />
            </div>
            <div>
              <div className="text-gold-400 font-mono">{event.time}</div>
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-gray-400">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Technical requirement card
const RequirementCard = ({
  icon,
  title,
  description,
}: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-gray-800/60 p-5 rounded-xl border border-gray-700">
      <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gold-400 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default function Logistics() {
  return (
    <div className="space-y-12">
      {/* Full-width banner */}
      <FullWidthBanner />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gold-400 mb-4">Virtual Competition Logistics</h1>
            <p className="text-xl text-gray-300">
              Everything you need to know about participating in our online programming competition.
            </p>
          </div>

          {/* Registration button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScNG1ff3AOMClKEK3Mjb5_s7bv7g_vWOwWdRv-S6lE-RLPhXA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
          >
            Register Now <ExternalLink size={20} />
          </a>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gold-300">Competition Schedule</h2>
          <p className="mb-6 text-gray-300">
            <strong>Date:</strong> June 8th, 2025
            <br />
            <strong>Time:</strong> All times listed in Eastern Standard Time (EST)
          </p>
          <Timeline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-gold-300">Technical Requirements</h2>
            <div className="grid gap-4">
              <RequirementCard
                icon={<Monitor className="text-gold-400" />}
                title="Device"
                description="Computer or laptop with at least a 13-inch screen. Tablets are supported but not recommended."
              />
              <RequirementCard
                icon={<Wifi className="text-gold-400" />}
                title="Internet"
                description="Stable broadband connection with minimum 5 Mbps download and 2 Mbps upload speeds."
              />
              <RequirementCard
                icon={<Clock className="text-gold-400" />}
                title="Browser"
                description="Latest version of Chrome, Firefox, or Edge for optimal HackerRank experience. Ensure JavaScript is enabled."
              />
              <RequirementCard
                icon={<Monitor className="text-gold-400" />}
                title="HackerRank Account"
                description="Contest access will be provided via email. No separate HackerRank account creation required."
              />
            </div>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-gold-300">Contact Support</h2>
            <p className="mb-4 text-gray-300">
              Our support team will be available throughout the competition to assist with any issues.
            </p>
            <div className="space-y-4">
              <div>
                <span className="text-gold-400 font-semibold">Support Form:</span>
                <br />
                <a
                  href="https://forms.gle/HdP28HkeoRZyaCVb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  https://forms.gle/HdP28HkeoRZyaCVb7
                </a>
              </div>
              <div>
                <span className="text-gold-400 font-semibold">Discord:</span>
                <br />
                <a
                  href="https://discord.gg/w8vXRGjQKF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Join our Discord server
                </a>
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-gold-400">Hours:</span> 12:00 PM - 6:00 PM EST on competition day
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
