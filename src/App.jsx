import React, { useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { useAgent } from "./context/AgentContext.jsx"
import { useAuth } from "./context/AuthContext"
import Login from "./pages/Login.jsx"

import Sidebar from "./components/Sidebar/Sidebar.jsx"
import TopBar from "./components/TopBar/TopBar.jsx"
import PromptArea from "./components/PromptArea/PromptArea.jsx"
import ExecutionPanel from "./components/AgentExecution/ExecutionPanel.jsx"

const stateBackgroundMap = {
  idle: "",
  thinking:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08)_0%,transparent_60%)]",
  executing:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10)_0%,transparent_60%)]",
  waiting:
    "bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]",
  completed:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06)_0%,transparent_60%)]",
  error:
    "bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.10)_0%,transparent_60%)]",
}

export default function App() {
  const { state } = useAgent()
  const { user } = useAuth()

  // 🔒 Auth Gate
  if (!user) {
    return <Login />
  }

  const bgClass = stateBackgroundMap[state.status] || ""
  const bgRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = bgRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty("--mouse-x", `${xPercent}%`)
    el.style.setProperty("--mouse-y", `${yPercent}%`)
  }, [])

  return (
    <div
      ref={bgRef}
      onMouseMove={handleMouseMove}
      className={`
        relative flex h-screen text-text-primary overflow-hidden
        bg-[#070b1a] transition-all duration-500 ${bgClass}
      `}
    >
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.18),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.15),transparent_40%)]" />
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="relative flex flex-col flex-1 min-w-0 overflow-hidden z-10">
        <TopBar />

        <main className="flex-1 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto px-8 py-16 flex flex-col gap-10"
          >
            {/* Headline */}
            <div className="text-center">
              <h1
                className="
                  text-5xl font-semibold tracking-tight
                  bg-gradient-to-r from-blue-400 to-indigo-500
                  bg-clip-text text-transparent mb-4
                "
              >
                Let's set up your system!
              </h1>

              <p className="text-text-muted text-base max-w-xl mx-auto">
                Your very own AI agent here to assist you through your coding journey.
              </p>
            </div>

            {/* Glow layer */}
            <div className="absolute -inset-20 bg-blue-500/10 blur-3xl -z-10" />

            {/* Prompt Card */}
            <div
              className="
                relative rounded-3xl
                bg-white/5 backdrop-blur-2xl
                border border-white/10
                p-8
                shadow-[0_20px_80px_rgba(59,130,246,0.15)]
              "
            >
              <PromptArea />
            </div>

            {/* Execution Panel */}
            <ExecutionPanel />
          </motion.div>
        </main>
      </div>
    </div>
  )
}