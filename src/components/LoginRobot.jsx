import React, { useEffect, useRef, useState } from "react"

export default function LoginRobot({ isTyping }) {
  const robotRef = useRef(null)
  const [pupilStyle, setPupilStyle] = useState({})

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = robotRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      const moveX = Math.max(Math.min(x / 25, 6), -6)
      const moveY = Math.max(Math.min(y / 25, 6), -6)

      setPupilStyle({
        transform: `translate(${moveX}px, ${moveY}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={robotRef} className="relative w-64 h-64 flex items-center justify-center">

      {/* Particle Field */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute w-56 h-56 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />

      {/* Robot Body */}
      <div className="relative w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_0_60px_rgba(59,130,246,0.7)] flex flex-col items-center justify-center animate-breathe transition-transform duration-300 hover:scale-105">

        {/* Eyes */}
        <div className="flex gap-6 mb-4">
          {[0, 1].map((eye) => (
            <div key={eye} className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <div
                className={`w-4 h-4 bg-blue-600 rounded-full transition-all duration-200 ${isTyping ? "scale-75" : ""}`}
                style={pupilStyle}
              />
            </div>
          ))}
        </div>

        {/* Mouth */}
        <div className={`w-10 h-2 rounded-full bg-white transition-all duration-300 ${isTyping ? "h-4 rounded-lg" : ""}`} />
      </div>
    </div>
  )
}