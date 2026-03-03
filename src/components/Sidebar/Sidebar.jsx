import React, { useState } from "react"
import {
  Activity,
  FileText,
  ChevronLeft,
  ChevronRight,
  Settings,
  Bot,
} from "lucide-react"
import NewChatButton from "./NewChatButton.jsx"
import SearchChat from "./SearchChat.jsx"
import SidebarItem from "./SidebarItem.jsx"

const activityItems = [
  { id: 1, label: "Data analysis task", time: "2m ago" },
  { id: 2, label: "Code review request", time: "15m ago" },
  { id: 3, label: "Research summary", time: "1h ago" },
]

const logItems = [
  { id: 1, label: "Agent initialized", level: "info" },
  { id: 2, label: "Model loaded: GPT-4", level: "info" },
  { id: 3, label: "API connected", level: "success" },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState(null)

  return (
    <aside
      className={`
        relative flex flex-col h-full
        bg-white/5 backdrop-blur-xl
        border-r border-white/10
        shadow-[inset_0_0_60px_rgba(99,102,241,0.15)]
        transition-all duration-300 ease-in-out
        ${collapsed ? "w-[72px]" : "w-[260px]"}
        flex-shrink-0 overflow-hidden
      `}
    >
      {/* Ambient glow layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)] pointer-events-none" />

      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="
          absolute -right-3 top-6 z-10
          w-7 h-7 rounded-full
          bg-white/10 backdrop-blur-md
          border border-white/20
          flex items-center justify-center
          text-text-muted hover:text-blue-400
          transition-all duration-200
          hover:scale-110 hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]
        "
      >
        {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
      </button>

      {/* Logo / Brand */}
      <div
        className={`flex items-center gap-3 px-5 py-6 border-b border-white/10 ${
          collapsed ? "justify-center" : ""
        }`}
      >
        <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_25px_rgba(59,130,246,0.6)]">
          <Bot size={17} className="text-white" />
        </div>

        {!collapsed && (
          <span className="text-base font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent whitespace-nowrap">
            AI Agent
          </span>
        )}
      </div>

      {/* Main content */}
      <div className="relative flex flex-col gap-3 px-4 pt-5 flex-1 overflow-y-auto">
        <NewChatButton collapsed={collapsed} />
        <SearchChat collapsed={collapsed} />

        {/* Activity section */}
        <div className="mt-6">
          {!collapsed && (
            <p className="text-[11px] text-text-muted uppercase tracking-wider px-1 mb-3 font-semibold">
              Activity
            </p>
          )}

          <SidebarItem
            icon={Activity}
            label="Activity"
            active={activeItem === "activity"}
            collapsed={collapsed}
            onClick={() =>
              setActiveItem(activeItem === "activity" ? null : "activity")
            }
            badge
          />

          {!collapsed && activeItem === "activity" && (
            <div className="mt-2 ml-3 pl-4 border-l border-white/10 space-y-2 animate-fade-in">
              {activityItems.map((item) => (
                <div
                  key={item.id}
                  className="py-2 px-3 rounded-lg text-xs bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <p className="text-text-primary truncate">
                    {item.label}
                  </p>
                  <p className="text-text-muted text-[10px]">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Logs section */}
        <div className="mt-4">
          {!collapsed && (
            <p className="text-[11px] text-text-muted uppercase tracking-wider px-1 mb-3 font-semibold">
              Logs
            </p>
          )}

          <SidebarItem
            icon={FileText}
            label="Logs"
            active={activeItem === "logs"}
            collapsed={collapsed}
            onClick={() =>
              setActiveItem(activeItem === "logs" ? null : "logs")
            }
          />

          {!collapsed && activeItem === "logs" && (
            <div className="mt-2 ml-3 pl-4 border-l border-white/10 space-y-2 animate-fade-in">
              {logItems.map((item) => (
                <div
                  key={item.id}
                  className="py-2 px-3 rounded-lg text-xs flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      item.level === "success"
                        ? "bg-emerald-400"
                        : "bg-blue-400"
                    }`}
                  />
                  <p className="text-text-muted truncate">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom item */}
      <div className="px-4 pb-5 border-t border-white/10 pt-4">
        <SidebarItem
          icon={Settings}
          label="Settings"
          active={activeItem === "settings"}
          collapsed={collapsed}
          onClick={() => setActiveItem("settings")}
        />
      </div>
    </aside>
  )
}