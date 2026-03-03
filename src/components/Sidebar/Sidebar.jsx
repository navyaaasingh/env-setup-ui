import React, { useState } from 'react'
import {
  Activity,
  FileText,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Settings,
  Bot,
} from 'lucide-react'
import NewChatButton from './NewChatButton.jsx'
import SearchChat from './SearchChat.jsx'
import SidebarItem from './SidebarItem.jsx'

const activityItems = [
  { id: 1, label: 'Data analysis task', time: '2m ago' },
  { id: 2, label: 'Code review request', time: '15m ago' },
  { id: 3, label: 'Research summary', time: '1h ago' },
]

const logItems = [
  { id: 1, label: 'Agent initialized', level: 'info' },
  { id: 2, label: 'Model loaded: GPT-4', level: 'info' },
  { id: 3, label: 'API connected', level: 'success' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState(null)

  return (
    <aside
      className={`
        relative flex flex-col h-full
        glass-card border-r border-border-subtle
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-[68px]' : 'w-[240px]'}
        flex-shrink-0 overflow-hidden
      `}
    >
      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="
          absolute -right-3 top-6 z-10
          w-6 h-6 rounded-full
          glass-card border border-border-subtle
          flex items-center justify-center
          text-text-muted hover:text-primary
          transition-all duration-200
          hover:scale-110
        "
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>

      {/* Logo / Brand */}
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-border-subtle ${collapsed ? 'justify-center' : ''}`}>
        <div className="w-8 h-8 rounded-lg bg-sphere-gradient flex items-center justify-center flex-shrink-0 animate-sphere-pulse">
          <Bot size={16} className="text-background" />
        </div>
        {!collapsed && (
          <span className="text-sm font-bold text-gradient whitespace-nowrap">
            AI Agent
          </span>
        )}
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-2 px-3 pt-4 flex-1 overflow-y-auto">
        <NewChatButton collapsed={collapsed} />
        <SearchChat collapsed={collapsed} />

        {/* Activity section */}
        <div className="mt-4">
          {!collapsed && (
            <p className="text-xs text-text-muted uppercase tracking-wider px-1 mb-2 font-semibold">
              Activity
            </p>
          )}
          <SidebarItem
            icon={Activity}
            label="Activity"
            active={activeItem === 'activity'}
            collapsed={collapsed}
            onClick={() => setActiveItem(activeItem === 'activity' ? null : 'activity')}
            badge
          />
          {!collapsed && activeItem === 'activity' && (
            <div className="mt-1 ml-2 pl-3 border-l border-border-subtle space-y-1 animate-fade-in">
              {activityItems.map((item) => (
                <div key={item.id} className="py-1.5 px-2 rounded text-xs">
                  <p className="text-text-primary truncate">{item.label}</p>
                  <p className="text-text-muted">{item.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Logs section */}
        <div className="mt-2">
          {!collapsed && (
            <p className="text-xs text-text-muted uppercase tracking-wider px-1 mb-2 font-semibold">
              Logs
            </p>
          )}
          <SidebarItem
            icon={FileText}
            label="Logs"
            active={activeItem === 'logs'}
            collapsed={collapsed}
            onClick={() => setActiveItem(activeItem === 'logs' ? null : 'logs')}
          />
          {!collapsed && activeItem === 'logs' && (
            <div className="mt-1 ml-2 pl-3 border-l border-border-subtle space-y-1 animate-fade-in">
              {logItems.map((item) => (
                <div key={item.id} className="py-1.5 px-2 rounded text-xs flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      item.level === 'success' ? 'bg-green-400' : 'bg-primary'
                    }`}
                  />
                  <p className="text-text-muted truncate">{item.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom item */}
      <div className="px-3 pb-4 border-t border-border-subtle pt-3">
        <SidebarItem
          icon={Settings}
          label="Settings"
          active={activeItem === 'settings'}
          collapsed={collapsed}
          onClick={() => setActiveItem('settings')}
        />
      </div>
    </aside>
  )
}
