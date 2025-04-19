"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Symbol {
  id: number
  symbol: string
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function FloatingSymbols() {
  const [symbols, setSymbols] = useState<Symbol[]>([])

  useEffect(() => {
    // Only generate symbols on client-side
    const mathSymbols = ["∑", "∫", "π", "√", "∞", "θ", "Δ", "∇", "∀", "∃", "∈", "⊂", "⊆", "∩", "∪"]
    const newSymbols: Symbol[] = []

    for (let i = 0; i < 15; i++) {
      newSymbols.push({
        id: i,
        symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.8, // Between 0.8 and 2.3
        duration: Math.random() * 20 + 10, // Between 10 and 30 seconds
        delay: Math.random() * 5, // Between 0 and 5 seconds
      })
    }

    setSymbols(newSymbols)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {symbols.map((symbol) => (
        <motion.div
          key={symbol.id}
          className="absolute text-gold-400/20 font-mono"
          style={{
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
            fontSize: `${symbol.size}rem`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: symbol.duration,
            delay: symbol.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {symbol.symbol}
        </motion.div>
      ))}
    </div>
  )
}
