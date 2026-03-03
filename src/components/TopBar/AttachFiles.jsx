import React, { useRef } from "react"
import { Paperclip } from "lucide-react"

export default function AttachFiles() {
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      console.log("Attached files:", files.map((f) => f.name))
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
          flex items-center gap-2 px-4 py-2.5 rounded-xl
          bg-white/5 backdrop-blur-md
          border border-white/10
          text-text-muted
          hover:text-blue-400
          hover:border-blue-400/40
          hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
          transition-all duration-300 text-sm font-medium
        "
      >
        <Paperclip size={15} />
        <span className="hidden sm:inline">Attach</span>
      </button>
    </>
  )
}