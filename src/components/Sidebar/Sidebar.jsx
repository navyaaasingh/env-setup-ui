import React, { useState } from 'react';
import NewChatButton from './NewChatButton';
import SearchChat from './SearchChat';
import SidebarItem from './SidebarItem';

const ACTIVITY_ITEMS = [
  { id: 'a1', icon: '🔥', label: 'Setup Python env' },
  { id: 'a2', icon: '⚡', label: 'Configure Docker' },
  { id: 'a3', icon: '🛠️', label: 'Install Node.js' },
];

const LOG_ITEMS = [
  { id: 'l1', icon: '📋', label: 'Error log #42' },
  { id: 'l2', icon: '📊', label: 'Build report' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div
      className="relative z-20 flex h-full flex-col overflow-hidden transition-all duration-300"
      style={{
        width: isCollapsed ? '60px' : '240px',
        backgroundColor: '#1C1616',
        borderRight: '1px solid #2D2626',
        boxShadow: '4px 0 20px rgba(153, 27, 27, 0.2)',
      }}
    >
      {/* Toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center justify-center p-3 transition-all duration-200 hover:text-primary"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        style={{
          height: '52px',
          color: '#71717A',
          borderBottom: '1px solid #2D2626',
          flexShrink: 0,
        }}
        title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <span className="text-lg">{isCollapsed ? '▶' : '◀'}</span>
      </button>

      {/* New Chat Button */}
      <div className="px-2 py-2" style={{ borderBottom: '1px solid #2D2626', flexShrink: 0 }}>
        <NewChatButton isCollapsed={isCollapsed} />
      </div>

      {/* Search */}
      <div className="px-2 py-2" style={{ borderBottom: '1px solid #2D2626', flexShrink: 0 }}>
        <SearchChat isCollapsed={isCollapsed} />
      </div>

      {/* Scrollable content */}
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* Activity section */}
        <div className="px-2 py-3">
          {!isCollapsed && (
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#71717A' }}>
              Recent Activity
            </p>
          )}
          {ACTIVITY_ITEMS.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.id}
              isCollapsed={isCollapsed}
              onClick={() => setActiveItem(item.id)}
            />
          ))}
        </div>

        {/* Logs section */}
        <div className="px-2 py-3" style={{ borderTop: '1px solid #2D2626' }}>
          {!isCollapsed && (
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#71717A' }}>
              Logs
            </p>
          )}
          {LOG_ITEMS.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.id}
              isCollapsed={isCollapsed}
              onClick={() => setActiveItem(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center px-3 py-3"
        style={{ borderTop: '1px solid #2D2626', flexShrink: 0 }}
      >
        <span className="text-lg">⚙️</span>
        {!isCollapsed && (
          <span className="ml-3 truncate text-sm" style={{ color: '#71717A' }}>
            Settings
          </span>
        )}
      </div>
    </div>
  );
}
