"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex justify-center space-x-4 text-2xl font-bold">
      <div className="text-center">
        <div className="text-4xl text-gold-400">{timeLeft.days}</div>
        <div className="text-sm text-gray-400">Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl text-gold-400">{timeLeft.hours}</div>
        <div className="text-sm text-gray-400">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-4xl text-gold-400">{timeLeft.minutes}</div>
        <div className="text-sm text-gray-400">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-4xl text-gold-400">{timeLeft.seconds}</div>
        <div className="text-sm text-gray-400">Seconds</div>
      </div>
    </div>
  )
}

// Code background component
const CodeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute top-0 left-0 w-full h-full text-[10px] font-mono text-gold-400 whitespace-pre overflow-hidden leading-snug">
        {`
function initializeCompetition(teamID) {
  const team = validateTeam(teamID);
  const problems = loadProblemSet();
  
  const session = {
    team: team,
    problems: problems,
    startTime: new Date(),
    submissions: [],
    score: 0
  };
  
  return session;
}

class CompetitionManager {
  constructor() {
    this.teams = [];
    this.leaderboard = [];
    this.timeLimit = 4 * 60 * 60 * 1000;
  }
  
  registerTeam(team) {
    const validatedTeam = {
      ...team,
      registeredAt: new Date(),
      status: "registered"
    };
    this.teams.push(validatedTeam);
  }
  
  startCompetition() {
    return this.teams.map(team => this.initializeSession(team));
  }
  
  submitSolution(teamID, problemID, solution) {
    const team = this.teams.find(t => t.id === teamID);
    if (!team) return { error: "Team not found" };
    
    const result = this.evaluateSolution(solution, problemID);
    team.submissions.push({
      problemID,
      solution,
      result,
      timestamp: new Date()
    });
    
    this.updateScore(team, result);
    return result;
  }
}

const judgeSystem = {
  testCases: new Map(),
  
  runTests(solution, problemID) {
    const tests = this.testCases.get(problemID);
    let passed = 0;
    
    for (const test of tests) {
      try {
        const output = solution(test.input);
        if (output === test.expected) passed++;
      } catch (error) {
        console.log("Runtime error:", error);
      }
    }
    
    return {
      passed,
      total: tests.length,
      score: (passed / tests.length) * 100
    };
  }
};`.repeat(6)}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section with Code Background */}
      <section className="relative -mt-8 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <CodeBackground />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block bg-gray-800/80 backdrop-blur-sm px-4 py-1 rounded-full">
                  <span className="text-gold-400 font-mono text-sm tracking-wider">Spring 2025</span>
                </div>
                <img src="/spring25.svg" width="400"></img>
                <br></br>
                <p className="text-xl md:text-2xl text-gray-300 font-mono">
                  Poolesville High School<br></br> <span className="text-gold-400">Computing Olympiad</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex space-x-4"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScNG1ff3AOMClKEK3Mjb5_s7bv7g_vWOwWdRv-S6lE-RLPhXA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors text-lg"
                >
                  Register Now <ExternalLink size={18} />
                </a>
                <Link
                  href="https://discord.gg/w8vXRGjQKF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-gold-400 font-bold py-3 px-6 rounded-lg transition-colors text-lg border border-gold-400/30"
                >
                  Join Discord
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gold-300 mb-1">Event Countdown</h2>
                <p className="text-gray-400">June 8, 2025 • 1:00 PM EST</p>
              </div>
              <CountdownTimer targetDate={new Date("2025-06-08T13:00:00")} />

              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-gold-400 font-bold text-lg mb-2">Spring 2025 Theme - The Great Heist</div>
                  <p className="text-gray-300 text-sm">
                    After a budgeting mishap, the PHS Computer Team is in crippling debt and (more importantly)
                    desperately in need of funds for its traditional end-of-year party! Can you use your programming skills
                    to help crack the fabled vaults of the corrupt Cardinal Casino and save the club?
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gold-300">Competition Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-gold-400 mb-2">Reimagined Competitive Format</h3>
            <p className="text-gray-300">
              With a unique CTF-style format designed to encourage strategic thinking and teamwork,
              each solved problem unravels more of the story and gets you one step closer to the prize.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-gold-400 mb-2">Go Solo, or Bring a Friend</h3>
            <p className="text-gray-300">
              Participate individually or partner up with a friend to try to solve as many problems as possible in the
              4-hour competition window.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-gold-400 mb-2">All Skill Levels, Anywhere</h3>
            <p className="text-gray-300">
              Whether you're new to competitive programming or an experienced programmer,
              there are problems designed for every skill level. Compete virtually from
              the comfort of your own home - no travel required!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
