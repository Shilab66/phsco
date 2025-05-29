"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Monitor, Wifi, Terminal, ExternalLink, Code } from "lucide-react"

// Banner component that spans the full width
const FullWidthBanner = () => {
  return;
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
          PHS Computing Olympiad - Spring 2025
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
      description: "Practice submitting on the HackerRank platform and prepare for the competition.",
    },
    {
      time: "1:00 PM",
      title: "Competition Begins",
      description: "The problems are revealed and code submissions are opened.",
    },
    {
      time: "4:00 PM",
      title: "Leaderboard Freezes",
      description: "Leaderboard frozen until the awards ceremony. Don't give up until the end!",
    },
    {
      time: "5:00 PM",
      title: "Competition Ends",
      description: "Code submissions close and final scores are tallied. Keep your email open!",
    },
    {
      time: "6:00 PM",
      title: "Results & Awards",
      description: "Final results are announced & awards are given.",
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
            viewport={{ once: true, margin: "1000px" }}
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
}: { icon: React.ReactNode; title: string; description: React.ReactNode }) => {
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mx-4">
          <div>
            <h1 className="text-4xl font-bold text-gold-400 mb-4">Virtual Competition Logistics</h1>
            <p className="text-xl text-gray-300">
              Everything you need to know about participating in the Spring 2025 PHS Computing Olympiad.
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

      <div className="grid md:grid-cols-2 gap-6 mx-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-gold-300">Competition Schedule</h2>
            <p className="mb-6 text-gray-300">
              <strong>Date:</strong> June 8th, 2025
              <br />
              <strong>Time:</strong> All times listed in Eastern Standard Time (EST)
            </p>
            <Timeline />
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-gold-300">Contact Support</h2>
            <p className="mb-4 text-gray-300">
              Our support team will be available prior to and during the competition to assist with any issues.
            </p>
            <div className="space-y-6">
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
                We will try to respond to every request we receive within a day; please be patient and do not submit multiple requests for the same issue.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-10 text-gold-300">Technical Requirements</h2>
            <div className="grid gap-7">
              <RequirementCard
                icon={<Monitor className="text-gold-400" />}
                title="Device"
                description="A desktop or laptop computer with the ability to access the internet. Chromebooks are supported, but it is recommended to use a Windows/Mac/Linux/etc. if possible."
              />
              <RequirementCard
                icon={<Terminal className="text-gold-400" />}
                title="Programs"
                description={<>You can use any* IDE of your choice. You need to be able to open PDFs locally on your device. You will also need to be able to extract .7z archives, either with a program like <a className="text-blue-400 hover:text-blue-300 underline" href='https://www.7-zip.org/'>7-Zip</a> or an online service such as <a className="text-blue-400 hover:text-blue-300 underline" href='https://extract.me/'>https://extract.me/</a>.<br></br><br></br>*Please do not use any web-based IDEs other than the one provided via HackerRank; platforms such as Replit and Ideone make your code publicly visible, which is a rules violation.</>}
              />
              <RequirementCard
                icon={<Wifi className="text-gold-400" />}
                title="Internet"
                description="An internet connection is required to access the HackerRank platform and submit your solutions. Problems statements will be downloaded onto your computer, so you can continue working in the case of an outage."
              />
              <RequirementCard
                icon={<Monitor className="text-gold-400" />}
                title="HackerRank Account"
                description={<>You must register for a personal HackerRank account before the contest begins. Register for a free account at <a className="text-blue-400 hover:text-blue-300 underline" href='https://www.hackerrank.com/dashboard'>https://www.hackerrank.com/dashboard</a>.</>}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
