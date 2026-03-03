import React, { useState } from "react"
import { Search, X } from "lucide-react"

export default function SearchChat({ collapsed }) {
  const [query, setQuery] = useState("")
  const [focused, setFocused] = useState(false)

  return (
    <div
      className={`
        relative flex items-center rounded-xl
        bg-white/5 backdrop-blur-md
        border transition-all duration-300
        ${
          focused
            ? "border-blue-400/40 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            : "border-white/10 hover:border-white/20"
        }
        ${collapsed ? "justify-center px-2 py-2" : "px-3 py-2.5"}
      `}
    >
      <Search
        size={15}
        className={`
          flex-shrink-0 transition-all duration-300
          ${focused ? "text-blue-400" : "text-text-muted group-hover:text-blue-400"}
        `}
      />

      {!collapsed && (
        <>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Search chats..."
            className="
              ml-2 flex-1 bg-transparent text-sm text-text-primary
              placeholder-text-muted outline-none min-w-0
            "
          />

          {query && (
            <button
              onClick={() => setQuery("")}
              className="
                ml-1 text-text-muted
                hover:text-blue-400
                transition-colors duration-200
              "
            >
              <X size={13} />
            </button>
          )}
        </>
      )}
    </div>
  )
}