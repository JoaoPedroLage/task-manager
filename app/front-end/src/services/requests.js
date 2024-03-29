import axios from 'axios';

const api = axios.create({
  baseURL: 'https://task-manager-backend.up.railway.app',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const requestData = async (endpoint, body) => {
  const { data } = await api.get(endpoint, body);
  return data;
};

export const requestPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestEdit = async (endpoint) => {
  const { data } = await api.patch(endpoint);
  return data;
};

export const requestErase = async (endpoint) => {
  const { data } = await api.delete(endpoint);
  return data;
};

export default api;
