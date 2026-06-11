import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const RegisterUser = (userData) => {
  return API.post("/auth/register", userData);
};

export const LoginUser = (userData) => {
  return API.post("/auth/login", userData);
};

export const GoogleLoginUser = async (accessToken) => {
  return API.post("/auth/google", {
    accessToken,
  });
};
