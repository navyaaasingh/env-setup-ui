import React from 'react'

export default function SidebarItem({ icon: Icon, label, active, collapsed, onClick, badge }) {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={`
        sidebar-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
        text-sm transition-all duration-200 group
        ${active
          ? 'text-subtle-accent bg-surface border border-border-subtle shadow-heat'
          : 'text-text-muted hover:text-text-primary'
        }
        ${collapsed ? 'justify-center' : ''}
      `}
    >
      <div className="flex-shrink-0 relative">
        <Icon
          size={18}
          className={`
            transition-all duration-200
            ${active ? 'text-subtle-accent' : 'group-hover:text-primary'}
          `}
        />
        {badge && (
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent" />
        )}
      </div>
      {!collapsed && (
        <span className="truncate font-medium">{label}</span>
      )}
    </button>
  )
}
