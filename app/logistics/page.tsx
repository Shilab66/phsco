"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

// Timeline component
const Timeline = () => {
  const events = [
    {
      time: "8:00 AM",
      title: "Event Start",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      time: "9:00 AM",
      title: "Opening Session",
      description: "Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      time: "10:30 AM",
      title: "Session One",
      description: "Duis aute irure dolor in reprehenderit in voluptate",
    },
    {
      time: "12:00 PM",
      title: "Lunch Break",
      description: "Excepteur sint occaecat cupidatat non proident",
    },
    {
      time: "1:30 PM",
      title: "Session Two",
      description: "Sed ut perspiciatis unde omnis iste natus error",
    },
    {
      time: "3:00 PM",
      title: "Networking",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    },
    {
      time: "4:00 PM",
      title: "Closing Session",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor",
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

export default function Logistics() {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    },
    {
      question: "Consectetur adipiscing elit?",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Sed do eiusmod tempor incididunt?",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      question: "Ut labore et dolore magna aliqua?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      question: "Quis autem vel eum iure reprehenderit?",
      answer:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ]

  return (
    <div className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-gold-400 mb-4">Event Logistics</h1>
        <p className="text-xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gold-300">Event Schedule</h2>
          <Timeline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-gold-300">Location</h2>
            <div className="aspect-video bg-gray-700 rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-500">
                [Map Placeholder]
              </div>
            </div>
            <h3 className="font-semibold text-gold-400">Venue Name</h3>
            <p className="text-gray-300">123 Street Name, City, State 12345</p>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-gold-300">Contact</h2>
            <p className="mb-2">
              <span className="text-gold-400">Email:</span> contact@example.com
            </p>
            <p>
              <span className="text-gold-400">Phone:</span> (123) 456-7890
            </p>
          </div>
        </motion.div>
      </div>

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
