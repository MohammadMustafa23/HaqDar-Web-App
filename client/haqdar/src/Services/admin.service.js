import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000,
});

API.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // No response (network error)
    if (!error.response) {
      return Promise.reject(error);
    }

    // Don't refresh twice
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    // Only refresh on 401
    if (error.response.status === 401) {
      originalRequest._retry = true;

      try {
        await API.post("/admin/refresh-token");
        // Retry original request
        return await API(originalRequest);
      } catch (refreshError) {
        window.location.replace("/admin-login");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
export default API;

// Services
export const adminLogin = (data) => API.post("/admin/login", data);

export const logoutUser = () => API.post("/admin/logout");

export const verifyAdmin = () => API.get("/admin/verify");

export const getDashboard = () => API.get("/admin/dashboard");
