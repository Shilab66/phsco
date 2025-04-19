"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Sponsor tier component
const SponsorTier = ({
  title,
  description,
  sponsors,
  color,
}: {
  title: string
  description: string
  sponsors: { name: string; logo: string; url: string }[]
  color: string
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className={`h-6 w-6 rounded-full ${color}`}></div>
        <h2 className="text-2xl font-semibold text-gold-300">{title}</h2>
      </div>
      <p className="text-gray-300">{description}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <motion.a
            key={index}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700 flex flex-col items-center"
          >
            <div className="relative w-24 h-24 mb-4">
              <Image src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} fill className="object-contain" />
            </div>
            <h3 className="text-center font-semibold text-gold-400">{sponsor.name}</h3>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default function Sponsors() {
  const [activeTab, setActiveTab] = useState("current")

  const platinumSponsors = [
    { name: "Sponsor 1", logo: "/placeholder.svg?height=100&width=100", url: "#" },
    { name: "Sponsor 2", logo: "/placeholder.svg?height=100&width=100", url: "#" },
  ]

  const goldSponsors = [
    { name: "Sponsor 3", logo: "/placeholder.svg?height=100&width=100", url: "#" },
    { name: "Sponsor 4", logo: "/placeholder.svg?height=100&width=100", url: "#" },
    { name: "Sponsor 5", logo: "/placeholder.svg?height=100&width=100", url: "#" },
  ]

  const silverSponsors = [
    { name: "Sponsor 6", logo: "/placeholder.svg?height=100&width=100", url: "#" },
    { name: "Sponsor 7", logo: "/placeholder.svg?height=100&width=100", url: "#" },
    { name: "Sponsor 8", logo: "/placeholder.svg?height=100&width=100", url: "#" },
    { name: "Sponsor 9", logo: "/placeholder.svg?height=100&width=100", url: "#" },
  ]

  const bronzeSponsors = [
    { name: "Sponsor 10", logo: "/placeholder.svg?height=100&width=100", url: "#" },
    { name: "Sponsor 11", logo: "/placeholder.svg?height=100&width=100", url: "#" },
    { name: "Sponsor 12", logo: "/placeholder.svg?height=100&width=100", url: "#" },
    { name: "Sponsor 13", logo: "/placeholder.svg?height=100&width=100", url: "#" },
    { name: "Sponsor 14", logo: "/placeholder.svg?height=100&width=100", url: "#" },
  ]

  return (
    <div className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-gold-400 mb-4">Our Sponsors</h1>
        <p className="text-xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.
        </p>
      </motion.div>

      <div className="flex border-b border-gray-700 mb-8">
        <button
          onClick={() => setActiveTab("current")}
          className={`py-2 px-4 font-medium ${
            activeTab === "current" ? "text-gold-400 border-b-2 border-gold-400" : "text-gray-400"
          }`}
        >
          Current Sponsors
        </button>
        <button
          onClick={() => setActiveTab("become")}
          className={`py-2 px-4 font-medium ${
            activeTab === "become" ? "text-gold-400 border-b-2 border-gold-400" : "text-gray-400"
          }`}
        >
          Become a Sponsor
        </button>
      </div>

      {activeTab === "current" ? (
        <div className="space-y-16">
          <SponsorTier
            title="Platinum Sponsors"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt."
            sponsors={platinumSponsors}
            color="bg-gray-300"
          />

          <SponsorTier
            title="Gold Sponsors"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            sponsors={goldSponsors}
            color="bg-gold-400"
          />

          <SponsorTier
            title="Silver Sponsors"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            sponsors={silverSponsors}
            color="bg-gray-400"
          />

          <SponsorTier
            title="Bronze Sponsors"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            sponsors={bronzeSponsors}
            color="bg-amber-700"
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gold-300">Why Sponsor Us?</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-gold-400 mb-2">Benefit One</h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.
                </p>
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-gold-400 mb-2">Benefit Two</h3>
                <p className="text-gray-300">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-gold-400 mb-2">Benefit Three</h3>
                <p className="text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-gold-400 mb-2">Benefit Four</h3>
                <p className="text-gray-300">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold text-gold-300 mb-6">Sponsorship Tiers</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-700 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-300">Platinum</h3>
                  <span className="text-gold-400 font-bold">$5,000+</span>
                </div>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Consectetur adipiscing elit</li>
                  <li>• Nullam auctor, nisl eget</li>
                  <li>• Ultricies tincidunt, nisl nisl</li>
                  <li>• Aliquam nisl, eget ultricies</li>
                  <li>• Nisl nisl eget nisl</li>
                </ul>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-300">Gold</h3>
                  <span className="text-gold-400 font-bold">$2,500+</span>
                </div>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Consectetur adipiscing elit</li>
                  <li>• Nullam auctor, nisl eget</li>
                  <li>• Ultricies tincidunt, nisl nisl</li>
                  <li>• Aliquam nisl, eget ultricies</li>
                </ul>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-300">Silver</h3>
                  <span className="text-gold-400 font-bold">$1,000+</span>
                </div>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Consectetur adipiscing elit</li>
                  <li>• Nullam auctor, nisl eget</li>
                  <li>• Ultricies tincidunt, nisl nisl</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-300">Bronze</h3>
                  <span className="text-gold-400 font-bold">$500+</span>
                </div>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Consectetur adipiscing elit</li>
                  <li>• Nullam auctor, nisl eget</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="mailto:contact@example.com"
                className="block w-full py-3 bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold rounded-lg transition-colors text-center"
              >
                Contact Us About Sponsorship
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
