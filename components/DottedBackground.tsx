import type React from "react"

const DottedBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Grid background with dots at intersections */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 191, 26, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 191, 26, 0.1) 1px, transparent 1px),
            radial-gradient(circle at center, #FFBF1A 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 40px 40px, 40px 40px",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
        }}
      />

      {/* Additional subtle diagonal grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255, 191, 26, 0.15) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255, 191, 26, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)",
        }}
      />

      {/* Subtle vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default DottedBackground
