import React, { useState } from 'react'
import { Search, X } from 'lucide-react'

export default function SearchChat({ collapsed }) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  return (
    <div
      className={`
        relative flex items-center rounded-lg border border-border-subtle
        bg-surface/60 transition-all duration-200
        ${focused ? 'border-primary/50 shadow-glow-primary' : ''}
        ${collapsed ? 'justify-center px-2 py-2' : 'px-3 py-2'}
      `}
    >
      <Search
        size={15}
        className={`flex-shrink-0 ${focused ? 'text-primary' : 'text-text-muted'} transition-colors duration-200`}
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
              placeholder-text-muted outline-none
              min-w-0
            "
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="ml-1 text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              <X size={13} />
            </button>
          )}
        </>
      )}
    </div>
  )
}
