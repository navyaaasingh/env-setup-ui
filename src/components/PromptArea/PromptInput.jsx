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
}
