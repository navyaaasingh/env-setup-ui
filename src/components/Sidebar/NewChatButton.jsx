import React from 'react';

export default function NewChatButton({ isCollapsed }) {
  return (
    <button
      className="flex w-full items-center justify-center rounded-lg px-2 py-2 transition-all duration-200"
      style={{
        color: '#F59E0B',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        backgroundColor: 'rgba(245, 158, 11, 0.05)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(45deg, #F59E0B, #EA580C)';
        e.currentTarget.style.color = '#0F0A0A';
        e.currentTarget.style.boxShadow = '0 0 16px rgba(245, 158, 11, 0.4)';
        e.currentTarget.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(245, 158, 11, 0.05)';
        e.currentTarget.style.color = '#F59E0B';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'scale(1)';
      }}
      title={isCollapsed ? 'New Chat' : undefined}
    >
      <span className="text-lg font-bold">✏️</span>
      {!isCollapsed && (
        <span className="ml-2 text-sm font-semibold">New Chat</span>
      )}
    </button>
  );
}
