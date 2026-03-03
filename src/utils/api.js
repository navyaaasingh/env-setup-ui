<<<<<<< HEAD
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
=======
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
>>>>>>> main
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
<<<<<<< HEAD
});

export async function runAgent(prompt, model, mode) {
  try {
    const response = await api.post('/agent/run', { prompt, model, mode });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to run agent');
  }
}

export async function stopAgent() {
  try {
    const response = await api.post('/agent/stop');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to stop agent');
  }
}

export async function approveStep() {
  try {
    const response = await api.post('/agent/approve');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to approve step');
  }
}

export default api;
=======
})

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || error.message || 'An error occurred'
    return Promise.reject(new Error(message))
  }
)

export async function runAgentPrompt(prompt, model, options = {}) {
  const response = await api.post('/agent/run', {
    prompt,
    model,
    ...options,
  })
  return response.data
}

export async function stopAgent(agentId) {
  const response = await api.post(`/agent/${agentId}/stop`)
  return response.data
}

export async function approveAgentStep(agentId, stepId) {
  const response = await api.post(`/agent/${agentId}/approve`, { stepId })
  return response.data
}

export default api
>>>>>>> main
