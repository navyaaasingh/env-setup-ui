import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AgentProvider } from './context/AgentContext.jsx'
import './index.css'
import { AuthProvider } from "./context/AuthContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AgentProvider>
        <App />
      </AgentProvider>
    </AuthProvider>
  </React.StrictMode>
)
