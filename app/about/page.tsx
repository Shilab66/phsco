"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Animated counter component
const AnimatedCounter = ({ value, label }: { value: number; label: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-gold-400 mb-2"
      >
        {value}+
      </motion.div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
  )
}

// Team member card component
const TeamMember = ({
  name,
  role,
  image,
  description,
}: {
  name: string
  role: string
  image: string
  description: string
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
    >
      <div className="aspect-square relative">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gold-400">{name}</h3>
        <p className="text-gray-400 mb-2">{role}</p>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const teamMembers = [
    {
      name: "Person Name",
      role: "Role Title",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
    },
    {
      name: "Person Name",
      role: "Role Title",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Person Name",
      role: "Role Title",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Person Name",
      role: "Role Title",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]

  return (
    <div className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-gold-400 mb-4">About Us</h1>
        <p className="text-xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gold-300">Our Mission</h2>
            <p className="mb-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt,
              nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt.
            </p>
            <p className="text-gray-300">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <AnimatedCounter value={10} label="Years" />
            <AnimatedCounter value={5000} label="Participants" />
            <AnimatedCounter value={100} label="Organizations" />
            <AnimatedCounter value={50} label="Locations" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gold-300">Event Format</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
          >
            <div className="text-3xl text-gold-400 mb-2">01</div>
            <h3 className="text-xl font-semibold mb-2">Phase One</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
          >
            <div className="text-3xl text-gold-400 mb-2">02</div>
            <h3 className="text-xl font-semibold mb-2">Phase Two</h3>
            <p className="text-gray-300">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
          >
            <div className="text-3xl text-gold-400 mb-2">03</div>
            <h3 className="text-xl font-semibold mb-2">Phase Three</h3>
            <p className="text-gray-300">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gold-300">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gold-300">Join Us</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl
          nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
        </p>
        <a
          href="/register"
          className="inline-block bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Register Now
        </a>
      </motion.div>
    </div>
  )
}
