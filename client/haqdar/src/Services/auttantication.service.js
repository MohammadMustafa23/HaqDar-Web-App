import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const RegisterUser = (userData) => {
  return API.post("/auth/register", userData);
};

export const LoginUser = (userData) => {
  return API.post("/auth/login", userData);
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