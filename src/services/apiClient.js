import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000 // 10 segundos de tiempo de espera
});

export default apiClient;