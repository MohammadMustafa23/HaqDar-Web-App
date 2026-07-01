import axios from "axios"; // Your axios instance

const API = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  timeout: 10000,
});

export const adminLogin = (data) => {
  return API.post("/api/admin/login", data);
};

export const logoutUser = async () => {
  const res = await API.post("/api/admin/logout");
  return res.data;
};



export const verifyAdmin = () => {
  return API.get("/api/admin/verify");
};

// dashboard.service.js
export const getDashboard = async () => {
  const response = await API.get("/api/admin/dashboard");
  return response.data;
};