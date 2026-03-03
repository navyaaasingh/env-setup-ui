<<<<<<< HEAD
import React, { useRef, useState } from 'react';

export default function AttachFiles() {
  const fileInputRef = useRef(null);
  const [fileCount, setFileCount] = useState(0);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e) => {
    setFileCount(e.target.files.length);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200"
        style={{
          color: '#71717A',
          border: '1px solid #2D2626',
          backgroundColor: 'transparent',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#FDE047';
          e.currentTarget.style.borderColor = '#FDE047';
          e.currentTarget.style.boxShadow = '0 0 8px rgba(253, 224, 71, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#71717A';
          e.currentTarget.style.borderColor = '#2D2626';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <span>📎</span>
        <span>Attach Files</span>
        {fileCount > 0 && (
          <span
            className="flex h-4 w-4 items-center justify-center rounded-full text-xs font-bold"
            style={{ backgroundColor: '#F59E0B', color: '#0F0A0A' }}
          >
            {fileCount}
          </span>
        )}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
=======
import React, { useRef } from 'react'
import { Paperclip } from 'lucide-react'

export default function AttachFiles() {
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      console.log('Attached files:', files.map((f) => f.name))
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFileChange}
        aria-label="Attach files"
      />
      <button
        onClick={handleClick}
        title="Attach Files"
        className="
          flex items-center gap-2 px-3 py-2 rounded-lg
          border border-border-subtle text-text-muted
          hover:text-primary hover:border-primary/50
          transition-all duration-200 text-sm
          glass-card
        "
      >
        <Paperclip size={15} />
        <span className="hidden sm:inline">Attach</span>
      </button>
    </>
  )
>>>>>>> main
}
