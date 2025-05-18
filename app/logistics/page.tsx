"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Monitor, Wifi, Clock, HelpCircle, Download, MessageSquare, ExternalLink } from "lucide-react"

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
          Join us online for an exciting mathematical challenge from anywhere in the world
        </p>
      </div>
    </div>
  )
}

// Timeline component
const Timeline = () => {
  const events = [
    {
      time: "9:00 AM",
      title: "Virtual Check-in Opens",
      description: "Log in to the competition platform and verify your credentials",
    },
    {
      time: "9:30 AM",
      title: "Welcome Session",
      description: "Live-streamed opening remarks and competition instructions",
    },
    {
      time: "10:00 AM",
      title: "Individual Round Begins",
      description: "90-minute individual problem solving session",
    },
    {
      time: "11:30 AM",
      title: "Break",
      description: "30-minute break before the team round",
    },
    {
      time: "12:00 PM",
      title: "Team Round Begins",
      description: "60-minute collaborative problem solving session",
    },
    {
      time: "1:00 PM",
      title: "Lunch Break",
      description: "60-minute break for lunch",
    },
    {
      time: "2:00 PM",
      title: "Special Topic Round",
      description: "45-minute special topic challenge",
    },
    {
      time: "3:00 PM",
      title: "Closing Session",
      description: "Live-streamed closing remarks and preliminary results announcement",
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

// FAQ Accordion component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full py-4 text-left">
        <h3 className="text-lg font-semibold">{question}</h3>
        <ChevronDown className={`w-5 h-5 text-gold-400 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-300">{answer}</p>
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
  const faqs = [
    {
      question: "How do I access the virtual competition platform?",
      answer:
        "You will receive a unique access link via email 24 hours before the competition starts. Simply click the link and log in with the credentials provided in your registration confirmation.",
    },
    {
      question: "What if I experience technical difficulties during the competition?",
      answer:
        "We will have a dedicated technical support team available throughout the competition. You can access the help desk through the competition platform or by emailing support@phsco.example.com.",
    },
    {
      question: "How will the team round work in a virtual setting?",
      answer:
        "Team members will be placed in private virtual breakout rooms where they can collaborate. The platform includes a shared whiteboard, text chat, and video conferencing capabilities.",
    },
    {
      question: "Is a webcam required for participation?",
      answer:
        "Yes, a functioning webcam is required for proctoring purposes. Your face must be visible throughout the competition to ensure academic integrity.",
    },
    {
      question: "How will solutions be submitted?",
      answer:
        "Solutions can be typed directly into the platform or uploaded as PDF files. Each problem will have clear submission instructions and file size limitations.",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Full-width banner */}
      <FullWidthBanner />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gold-400 mb-4">Virtual Competition Logistics</h1>
            <p className="text-xl text-gray-300">
              Everything you need to know about participating in our online mathematics competition.
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
            All times are listed in Eastern Standard Time (EST). Please adjust for your local time zone.
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
                description="Latest version of Chrome, Firefox, or Edge. Safari is supported with limitations."
              />
            </div>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-gold-300">Contact Support</h2>
            <p className="mb-4 text-gray-300">
              Our technical support team will be available throughout the competition to assist with any issues.
            </p>
            <div className="space-y-2">
              <p>
                <span className="text-gold-400">Email:</span> support@phsco.example.com
              </p>
              <p>
                <span className="text-gold-400">Live Chat:</span> Available in the competition platform
              </p>
              <p>
                <span className="text-gold-400">Hours:</span> 8:00 AM - 5:00 PM EST on competition day
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-gold-300">Participation Instructions</h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gold-400 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Pre-Competition Setup</h3>
                <p className="text-gray-300">
                  Test your equipment and internet connection using our system check tool at least 24 hours before the
                  competition.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gold-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Login Process</h3>
                <p className="text-gray-300">
                  Log in 30 minutes before the start time to complete identity verification and environment checks.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gold-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">During the Competition</h3>
                <p className="text-gray-300">
                  Keep your webcam on at all times. Use the built-in calculator and scratch pad tools for your work.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gold-400 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Submission Guidelines</h3>
                <p className="text-gray-300">
                  Submit your solutions before the countdown timer ends. Late submissions will not be accepted.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <a href="#" className="flex items-center gap-2 text-gold-400 hover:underline">
              <Download size={18} />
              Download detailed participation guide (PDF)
            </a>
          </div>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-gold-300">Platform Preview</h2>

          <div className="aspect-video bg-gray-700 rounded-lg mb-6 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-500">
              [Competition Platform Screenshot]
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={18} className="text-gold-400" />
                <h3 className="font-semibold">Team Collaboration</h3>
              </div>
              <p className="text-sm text-gray-300">Virtual breakout rooms with whiteboard and chat functionality</p>
            </div>

            <div className="bg-gray-700/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle size={18} className="text-gold-400" />
                <h3 className="font-semibold">Help Center</h3>
              </div>
              <p className="text-sm text-gray-300">One-click access to technical support and competition rules</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gold-300">Frequently Asked Questions</h2>
        <div className="divide-y divide-gray-700">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
