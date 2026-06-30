import axios from "axios";
import { toast } from "sonner";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  timeout: 10000,
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      toast.error("Request Timeout");
    } else if (!error.response) {
      toast.error("Server Unavailable");
    } else if (error.response.status === 401) {
      toast.error("Please Login Again");
    } else if (error.response.status === 500) {
      toast.error("Internal Server Error");
    }
    return Promise.reject(error);
  }
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
    console.log(error);
    return false;
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await API.get("/auth/me");
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
