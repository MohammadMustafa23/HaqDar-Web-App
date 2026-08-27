import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.BACKNED_URL,
  withCredentials: true,
  timeout: 20000,
});

export const submitFeedback = async (feedbackData) => {
  const response = await API.post("/feedback/submit",feedbackData);
  return response.data;
};

export const getingFeatureFeedBack = async () => {
  const response = await API.get("/feedback/get-feedbacks");
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


export const showAllowFeature = async(id) => {
  const response = await API.patch(`/admin/feedback-feature/${id}`)
  return response.data;
}

