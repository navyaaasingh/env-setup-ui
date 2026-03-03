import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import PromptArea from './components/PromptArea/PromptArea';
import ExecutionPanel from './components/AgentExecution/ExecutionPanel';
import { useAgent } from './context/AgentContext';

export default function App() {
  const { state } = useAgent();

  return (
    <div
      className="flex h-screen w-screen overflow-hidden"
      style={{ backgroundColor: '#0F0A0A' }}
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(220, 38, 38, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245, 158, 11, 0.06) 0%, transparent 50%)',
        }}
      />

      <Sidebar />

      <div className="relative z-10 flex flex-1 flex-col overflow-hidden">
        <TopBar />

        <div className="flex flex-1 flex-col gap-4 overflow-auto p-4">
          <PromptArea />
          {state.agentState !== 'idle' && <ExecutionPanel />}
        </div>
      </div>
    </div>
  );
}
