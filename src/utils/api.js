import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
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
