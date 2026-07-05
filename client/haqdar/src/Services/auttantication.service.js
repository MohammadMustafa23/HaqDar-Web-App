import axios from "axios";
import { toast } from "sonner";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 20000,
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      toast.error("Request Timeout");
    } else if (!error.response) {
      toast.error("Server Unavailable");
    } else if (error.response.status === 401) {
      if (
        error.config?.url === "/auth/me" ||
        error.config?.url === "/auth/check-auth"
      ) {
        return Promise.reject(error);
      }

      toast.error("Please Login Again");
    } else if (error.response.status === 500) {
      toast.error("Internal Server Error");
    }
    return Promise.reject(error);
  },
);

export const RegisterUser = (userData) => {
  return API.post("/auth/register", userData);
};

export const LoginUser = (userData) => {
  return API.post("/auth/login", userData);
};

export const LoginOutUser = () => {
  return API.post("/auth/logout");
};

export const GoogleLoginUser = (accessToken) => {
  return API.post("/auth/google", {
    accessToken,
  });
};

export const isValidUser = async () => {
  try {
    const { data } = await API.get("/auth/check-auth");
    return data.success;
  } catch (error) {
    toast.error(
      error?.response?.data?.message ||
        error?.message ||
        "Something went wrong. Please try again.",
    );
    return false;
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await API.get("/auth/me");
    return data;
  } catch {
    return null;
  }
};
