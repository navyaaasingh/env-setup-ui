<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AgentProvider } from './context/AgentContext';
import './index.css';
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AgentProvider } from './context/AgentContext.jsx'
import './index.css'
>>>>>>> main

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AgentProvider>
      <App />
    </AgentProvider>
  </React.StrictMode>
<<<<<<< HEAD
);
=======
)
>>>>>>> main
