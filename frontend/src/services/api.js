import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// attach token if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// handle errors globally
API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login"; // auto redirect
    }
    return Promise.reject(err);
  }
);

export default API;
