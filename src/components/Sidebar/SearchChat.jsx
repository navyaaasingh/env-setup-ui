import React, { useState } from 'react';

export default function SearchChat({ isCollapsed }) {
  const [query, setQuery] = useState('');

  if (isCollapsed) {
    return (
      <button
        className="flex w-full items-center justify-center rounded-lg p-2 transition-all duration-200"
        style={{ color: '#71717A' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#FAFAF9';
          e.currentTarget.style.backgroundColor = 'rgba(45, 38, 38, 0.8)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#71717A';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
        title="Search chats"
      >
        <span className="text-base">🔍</span>
      </button>
    );
  }

  return (
    <div className="relative">
      <span
        className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-sm"
        aria-hidden="true"
        style={{ color: '#71717A' }}
      >
        🔍
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search chats..."
        className="w-full rounded-lg py-2 pl-8 pr-2 text-sm outline-none transition-all duration-200"
        style={{
          backgroundColor: 'rgba(45, 38, 38, 0.5)',
          color: '#FAFAF9',
          border: '1px solid #2D2626',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = '#F59E0B';
          e.currentTarget.style.boxShadow = '0 0 8px rgba(245, 158, 11, 0.3)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = '#2D2626';
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
    </div>
  );
}
