import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const submitFeedback = async (feedbackData) => {
  const response = await API.post("/feedback/submit",feedbackData);
  return response.data;
};

export const getAllFeedbacks = async() => {
  const response = await API.get('/admin/feedback')
  return response.data;
}

export const resolveFeedback = async(id) => {
  const response = await API.patch(`/admin/feedback/${id}`)
  return response.data;
}

export const deleteFeedback = async(id) => {
  const response = await API.delete(`/admin/feedback/${id}`)
  return response.data;
}
