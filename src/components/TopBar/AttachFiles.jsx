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
}
