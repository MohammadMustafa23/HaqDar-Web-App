import axios from "axios";

const API = axios.create({
<<<<<<< HEAD
 baseURL: import.meta.env.VITE_API_URL,
=======
  baseURL: import.meta.env.VITE_API_URL,
>>>>>>> ac542f7f2a2dd1d56da6aeeb985cc02456635594
  withCredentials: true,
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

