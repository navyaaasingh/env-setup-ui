import React, { useState } from "react"
import { useAuth } from "../context/AuthContext"
import LoginRobot from "../components/LoginRobot"

export default function Login() {
  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#070b1a] overflow-hidden">

      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.20),transparent_40%)]" />

      <div className="relative w-[1000px] flex items-center justify-between gap-16">

        {/* LEFT SIDE — Robot Mascot */}
        <div className="w-1/2 flex items-center justify-center">
          <LoginRobot isTyping={isTyping} />
        </div>

        {/* RIGHT SIDE — Login Card */}
        <div className="w-1/2 max-w-[420px] p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.2)]">

          <h1 className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-3">
            Welcome Back
          </h1>

          <p className="text-text-muted text-sm mb-8">
            Sign in to access your AI workspace
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setIsTyping(true)
              }}
              onBlur={() => setIsTyping(false)}
              className="px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white outline-none focus:border-blue-400/40 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
            />

            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setIsTyping(true)
              }}
              onBlur={() => setIsTyping(false)}
              className="px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white outline-none focus:border-blue-400/40 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
            />

            <button
              type="submit"
              className="mt-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-[1.02] transition-all duration-300"
            >
              Enter Workspace
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}