"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown, FileText, BookOpen, ExternalLink } from "lucide-react"

// Contest data structure
interface Contest {
  year: number
  name: string
  problems: {
    id: string // A, B, C, C2, etc.
    title: string
    difficulty: "Basic" | "Easy" | "Medium" | "Hard" | "Expert" | "Advanced"
    problemUrl: string
    solutionUrl: string
  }[]
}

export default function Archive() {
  // Sample past contest data
  const pastContests: Contest[] = [
    {
      year: 2025,
      name: "PHSCO February 2025",
      problems: [
        {
          id: "A",
          title: "Polly's New Laptop",
          difficulty: "Basic",
          problemUrl: "https://codeforces.com/group/nxOH2ImmkR/contest/583932/problem/A",
          solutionUrl: "/winter25_editorials.pdf#page=2",
        },
        {
          id: "B",
          title: "Make the Grade",
          difficulty: "Easy",
          problemUrl: "https://codeforces.com/group/nxOH2ImmkR/contest/583932/problem/B",
          solutionUrl: "/winter25_editorials.pdf#page=3",
        },
        {
          id: "C",
          title: "Magical Mirror",
          difficulty: "Easy",
          problemUrl: "https://codeforces.com/group/nxOH2ImmkR/contest/583932/problem/C",
          solutionUrl: "/winter25_editorials.pdf#page=4",
        },
        {
          id: "D",
          title: "Starr Showdown!",
          difficulty: "Easy",
          problemUrl: "https://codeforces.com/group/nxOH2ImmkR/contest/583932/problem/D",
          solutionUrl: "/winter25_editorials.pdf#page=5",
        },
        {
          id: "E",
          title: "Hexadecimal Hex",
          difficulty: "Medium",
          problemUrl: "https://codeforces.com/group/nxOH2ImmkR/contest/583932/problem/E",
          solutionUrl: "/winter25_editorials.pdf#page=6",
        },
        {
          id: "F",
          title: "Blocked Out",
          difficulty: "Medium",
          problemUrl: "https://codeforces.com/group/nxOH2ImmkR/contest/583932/problem/F",
          solutionUrl: "/winter25_editorials.pdf#page=7",
        },
        {
          id: "G",
          title: "Recursive Dartboard",
          difficulty: "Hard",
          problemUrl: "https://codeforces.com/group/nxOH2ImmkR/contest/583932/problem/G",
          solutionUrl: "/winter25_editorials.pdf#page=8",
        },
        {
          id: "H1",
          title: "Bitstring Birthday Game (Easy Version)",
          difficulty: "Medium",
          problemUrl: "https://codeforces.com/group/nxOH2ImmkR/contest/583932/problem/H1",
          solutionUrl: "/winter25_editorials.pdf#page=9",
        },
        {
          id: "H2",
          title: "Bitstring Birthday Game (Hard Version)",
          difficulty: "Medium",
          problemUrl: "https://codeforces.com/group/nxOH2ImmkR/contest/583932/problem/H2",
          solutionUrl: "/winter25_editorials.pdf#page=9",
        },
        {
          id: "I1",
          title: "High Rollers (Easy Version)",
          difficulty: "Medium",
          problemUrl: "https://codeforces.com/group/nxOH2ImmkR/contest/583932/problem/I1",
          solutionUrl: "/winter25_editorials.pdf#page=10",
        },
        {
          id: "I2",
          title: "High Rollers (Hard Version)",
          difficulty: "Hard",
          problemUrl: "https://codeforces.com/group/nxOH2ImmkR/contest/583932/problem/I2",
          solutionUrl: "/winter25_editorials.pdf#page=10",
        },
      ],
    }
  ]

  // Group contests by year
  const contestsByYear = pastContests.reduce(
    (acc, contest) => {
      if (!acc[contest.year]) {
        acc[contest.year] = []
      }
      acc[contest.year].push(contest)
      return acc
    },
    {} as Record<number, Contest[]>,
  )

  // Get years in descending order
  const years = Object.keys(contestsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  // State to track which contests are expanded
  const [expandedContests, setExpandedContests] = useState<Record<string, boolean>>({})

  // Toggle contest expansion
  const toggleContest = (contestId: string) => {
    setExpandedContests((prev) => ({
      ...prev,
      [contestId]: !prev[contestId],
    }))
  }

  // Helper function to get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Basic":
        return "text-blue-400"
      case "Easy":
        return "text-green-400"
      case "Medium":
        return "text-yellow-400"
      case "Hard":
        return "text-orange-400"
      case "Expert":
        return "text-red-400"
      case "Advanced":
        return "text-purple-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-gold-400 mb-4">Contest Archive</h1>
        <p className="text-xl text-gray-300">
          Browse through our past competitions, problems, and solutions. A valuable resource for practice and learning.
        </p>
      </motion.div>

      {/* Timeline indicator */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-700"></div>

        <div className="space-y-12 pl-8">
          {years.map((year) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Year marker */}
              <div className="absolute left-[-38px] top-0 w-[18px] h-[18px] rounded-full bg-gold-500 border-4 border-gray-900"></div>

              <h2 className="text-3xl font-bold text-white mb-6">{year}</h2>

              <div className="space-y-6">
                {contestsByYear[year].map((contest, idx) => {
                  const contestId = `${year}-${idx}`
                  const isExpanded = expandedContests[contestId]

                  return (
                    <motion.div
                      key={contestId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleContest(contestId)}
                        className="w-full flex justify-between items-center p-5 text-left"
                      >
                        <h3 className="text-xl font-semibold text-gold-300">{contest.name}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gold-400 transition-transform ${
                            isExpanded ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="p-5 pt-0 border-t border-gray-700">
                          <div className="grid gap-4 mt-4">
                            {contest.problems.map((problem, problemIdx) => (
                              <div
                                key={problemIdx}
                                className="bg-gray-700/50 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex-shrink-0 w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-400 font-bold">
                                    {problem.id}
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-lg font-medium">{problem.title}</span>
                                      <span className={`text-sm ${getDifficultyColor(problem.difficulty)}`}>
                                        {problem.difficulty}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex gap-3 ml-11 md:ml-0">
                                  <Link
                                    href={problem.problemUrl}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-md text-sm transition-colors"
                                  >
                                    <FileText size={16} />
                                    Problem
                                  </Link>
                                  <Link
                                    href={problem.solutionUrl}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 rounded-md text-sm transition-colors"
                                  >
                                    <BookOpen size={16} />
                                    Solution
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>

                          {<div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                            <span className="text-sm text-gray-400">{contest.problems.length} problems</span>
                          </div>}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Resources section */}
      {/*
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-semibold text-gold-300 mb-4">Additional Practice</h2>
        <p className="text-gray-300 mb-4">
          Looking for more practice materials? Check out these additional resources to help you prepare for future
          competitions.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="#"
            className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mb-3">
              <FileText className="text-gold-400" size={24} />
            </div>
            <h3 className="font-semibold mb-1">Practice Problems</h3>
            <p className="text-sm text-gray-400">Additional practice problems sorted by topic and difficulty</p>
          </Link>

          <Link
            href="#"
            className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mb-3">
              <BookOpen className="text-gold-400" size={24} />
            </div>
            <h3 className="font-semibold mb-1">Learning Materials</h3>
            <p className="text-sm text-gray-400">Tutorials, guides, and reference materials for competition math</p>
          </Link>

          <Link
            href="#"
            className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mb-3">
              <ExternalLink className="text-gold-400" size={24} />
            </div>
            <h3 className="font-semibold mb-1">External Resources</h3>
            <p className="text-sm text-gray-400">Links to other math competitions and helpful websites</p>
          </Link>
        </div>
      </motion.div>*/}
    </div>
  )
}
