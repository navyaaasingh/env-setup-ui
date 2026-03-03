import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function runAgent(prompt, model, mode) {
  const response = await api.post('/agent/run', { prompt, model, mode });
  return response.data;
}

export async function stopAgent() {
  const response = await api.post('/agent/stop');
  return response.data;
}

export async function approveStep() {
  const response = await api.post('/agent/approve');
  return response.data;
}

export default api;
