import React from "react"

export default function SidebarItem({
  icon: Icon,
  label,
  active,
  collapsed,
  onClick,
  badge,
}) {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={`
        relative w-full flex items-center gap-3
        px-3 py-2.5 rounded-xl
        text-sm transition-all duration-300 group
        backdrop-blur-md
        ${
          active
            ? `
              bg-gradient-to-r from-blue-500/20 to-indigo-500/20
              border border-blue-400/30
              shadow-[0_0_20px_rgba(99,102,241,0.5)]
              text-blue-400
              `
            : `
              border border-transparent
              text-text-muted
              hover:bg-white/5
              hover:border-white/10
              hover:text-text-primary
              `
        }
        ${collapsed ? "justify-center" : ""}
      `}
    >
      {/* Subtle glow layer when active */}
      {active && (
        <div className="absolute inset-0 rounded-xl bg-blue-500/10 blur-xl -z-10" />
      )}

      <div className="flex-shrink-0 relative">
        <Icon
          size={18}
          className={`
            transition-all duration-300
            ${
              active
                ? "text-blue-400"
                : "group-hover:text-blue-400"
            }
          `}
        />

        {badge && (
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        )}
      </div>

      {!collapsed && (
        <span className="truncate font-medium tracking-tight">
          {label}
        </span>
      )}
    </button>
  )
}