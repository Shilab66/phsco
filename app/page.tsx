"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

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

const categories = [
  { name: "Category 1", icon: "∑" },
  { name: "Category 2", icon: "△" },
  { name: "Category 3", icon: "ℕ" },
  { name: "Category 4", icon: "!" },
]

const testimonials = [
  {
    name: "Person Name",
    school: "Organization Name",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    name: "Another Person",
    school: "Another Organization",
    quote: "Vestibulum commodo. Ut rhoncus gravida arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

// Code background component
const CodeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20"> {/* Increased opacity */}
      <div className="absolute top-0 left-0 w-full h-full text-[10px] font-mono text-gold-400 whitespace-pre overflow-hidden leading-snug">
        {`// TwoBoots System Utility
function initializeBootSequence(pairID) {
  const leftBoot = calibrateSensor(pairID, "left");
  const rightBoot = calibrateSensor(pairID, "right");

  const boots = [leftBoot, rightBoot].map((boot) => {
    boot.status = "active";
    return optimizeFit(boot);
  });

  return boots;
}

class BootManager {
  constructor() {
    this.bootQueue = [];
    this.defaultSettings = { snugness: 7, archSupport: true };
  }

  addBoot(boot) {
    const preparedBoot = {
      ...boot,
      settings: this.defaultSettings,
      initiatedAt: new Date(),
    };
    this.bootQueue.push(preparedBoot);
  }

  deployAll() {
    return this.bootQueue.map((b) => deployBoot(b));
  }

  inspect(pairID) {
    return this.bootQueue.find((b) => b.id === pairID);
  }
}

const diagnostics = {
  checkHeelAlignment(boot) {
    return boot.alignment === "optimal";
  },
  logStatus(boot) {
    console.log(\`[BootLog] \${boot.id}: \${boot.status}\`);
  },
  emergencyOverride(boot) {
    boot.status = "manual";
    alert("Boot override initiated!");
    return boot;
  }
};

function runTwoBootsProtocol(dataStream) {
  const manager = new BootManager();
  dataStream.forEach((bootData) => {
    manager.addBoot(bootData);
  });

  const results = manager.deployAll();
  return results.filter((boot) => diagnostics.checkHeelAlignment(boot));
}

// Utility tools
const metrics = {
  averageLaceTime(boots) {
    return boots.reduce((sum, b) => sum + b.laceTime, 0) / boots.length;
  },
  evaluateSnugIndex(boot) {
    return Math.min(boot.snugness * 1.5, 10);
  }
};

const comfortEngine = {
  adjustPadding(boot) {
    boot.paddingLevel += 1;
    return boot;
  },
  detectFrictionZones(boot) {
    return boot.frictionAreas?.length > 0;
  }
};`.repeat(8)}
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
                <div className="inline-block bg-gray-800/80 backdrop-blur-sm px-4 py-1 rounded-full mb-2">
                  <span className="text-gold-400 font-mono text-sm tracking-wider">SAMPLE EVENT 2025</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">PHS</span>
                  <span className="text-gold-400">CO</span>
                </h1>
                <div className="h-1 w-20 bg-gold-400 my-4"></div>
                <p className="text-xl md:text-2xl text-gray-300 font-mono">
                  Lorem <span className="text-gold-400">Ipsum</span> Dolor Sit
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex space-x-4"
              >
                <Link
                  href="/register"
                  className="inline-block bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors text-lg"
                >
                  Register Now
                </Link>
                <Link
                  href="/about"
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-gold-400 font-bold py-3 px-6 rounded-lg transition-colors text-lg border border-gold-400/30"
                >
                  Learn More
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
                <p className="text-gray-400">May 15, 2025 • 10:00 AM EST</p>
              </div>
              <CountdownTimer targetDate={new Date("2025-05-15T09:00:00")} />

              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex justify-between text-sm text-gray-400">
                  <div>
                    <div className="text-gold-400 font-bold text-lg">500+</div>
                    Participants
                  </div>
                  <div>
                    <div className="text-gold-400 font-bold text-lg">50+</div>
                    Organizations
                  </div>
                  <div>
                    <div className="text-gold-400 font-bold text-lg">$10K</div>
                    In Prizes
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gold-300">Event Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-4 rounded-lg text-center"
            >
              <div className="text-4xl mb-2 text-gold-400">{category.icon}</div>
              <div className="font-semibold">{category.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gold-300">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <p className="text-lg mb-2">"{testimonial.quote}"</p>
              <p className="text-gold-400 font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.school}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
