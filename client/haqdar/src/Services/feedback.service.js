import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/feedback",
  withCredentials: true,
});

export const submitFeedback = async (feedbackData) => {
  const response = await API.post("/submit",feedbackData);
  return response.data;
};