import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  headers: {},
  baseURL: BASE_URL,
});

api.interceptors.response.use((response) => {
  if (response.status === 403) {
    window.location.href = "/login";
    return;
  }
  return response;
});

export default api;
