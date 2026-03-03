<<<<<<< HEAD
import React from 'react';

export default function SidebarItem({ icon, label, active, isCollapsed, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center rounded-lg px-2 py-2 text-left transition-all duration-200"
      style={{
        color: active ? '#F59E0B' : '#71717A',
        backgroundColor: active ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
        border: active ? '1px solid rgba(245, 158, 11, 0.2)' : '1px solid transparent',
        transform: 'scale(1)',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.color = '#FAFAF9';
          e.currentTarget.style.backgroundColor = 'rgba(45, 38, 38, 0.8)';
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 0 8px rgba(220, 38, 38, 0.2)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.color = '#71717A';
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
      title={isCollapsed ? label : undefined}
    >
      <span className="flex-shrink-0 text-base">{icon}</span>
      {!isCollapsed && (
        <span className="ml-3 truncate text-sm font-medium">{label}</span>
      )}
    </button>
  );
=======
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
>>>>>>> main
}
