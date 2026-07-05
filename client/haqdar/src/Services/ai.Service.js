import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const askAI = async (data) => {
  const response = await API.post("/bot/ai-chat", data, {
    withCredentials: true,
  });
  
  return response.data;
};
