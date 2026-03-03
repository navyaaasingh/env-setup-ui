import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
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
