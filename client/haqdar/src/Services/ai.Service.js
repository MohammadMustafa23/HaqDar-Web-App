import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/bot",
  withCredentials: true,
});

export const askAI = async (data) => {
  const response = await API.post("/ai-chat", data, {
    withCredentials: true,
  });
  
  return response.data;
};
