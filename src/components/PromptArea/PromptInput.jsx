<<<<<<< HEAD
import React, { useRef, useEffect } from 'react';
import { useAgent } from '../../context/AgentContext';

export default function PromptInput() {
  const { state, dispatch } = useAgent();
  const textareaRef = useRef(null);
  const isRunning = ['thinking', 'executing'].includes(state.agentState);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = Math.max(120, ta.scrollHeight) + 'px';
  }, [state.prompt]);

  return (
    <textarea
      ref={textareaRef}
      value={state.prompt}
      onChange={(e) => dispatch({ type: 'SET_PROMPT', payload: e.target.value })}
      disabled={isRunning}
      placeholder="Describe what you want the AI agent to do..."
      className="w-full resize-none bg-transparent outline-none transition-opacity duration-200"
      style={{
        minHeight: '120px',
        color: isRunning ? '#71717A' : '#FAFAF9',
        fontSize: '16px',
        lineHeight: '1.6',
        border: 'none',
        opacity: isRunning ? 0.6 : 1,
        cursor: isRunning ? 'not-allowed' : 'text',
      }}
    />
  );
=======
import React from 'react'
import { useAgent } from '../../context/AgentContext.jsx'

export default function PromptInput() {
  const { state, dispatch } = useAgent()
  const isDisabled = ['thinking', 'executing'].includes(state.status)

  return (
    <div className="relative flex-1">
      <textarea
        value={state.prompt}
        onChange={(e) => dispatch({ type: 'SET_PROMPT', payload: e.target.value })}
        disabled={isDisabled}
        placeholder="Describe what you want the AI agent to do..."
        rows={5}
        className={`
          w-full bg-transparent text-text-primary
          placeholder-text-muted
          resize-none outline-none text-base leading-relaxed
          disabled:opacity-60 disabled:cursor-not-allowed
          transition-opacity duration-200
        `}
      />
      {state.prompt && !isDisabled && (
        <div className="absolute bottom-2 right-2 text-xs text-text-muted">
          {state.prompt.length} chars
        </div>
      )}
    </div>
  )
>>>>>>> main
}
