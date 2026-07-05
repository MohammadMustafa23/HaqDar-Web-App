import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 30000,
});

export const generateRecommendations = async (profileData) => {
  const response = await API.post("/schemes/recommendations/generate",profileData);
  return response.data;
};

export async function getAllMatchedSchemes() {
  const response = await API.get("/schemes/all/schemes");
  return response.data;
}

export async function getMatchedSchemes() {
  const response = await API.get("/schemes/my-schemes");
  return response.data;
}

export const requestProfileEdit = async () => {
  const response = await API.post("/schemes/request-profile-edit");
  return response.data;
};

export const canEditProfile = async () => {
  const response = await API.get("/schemes/can-edit-profile");
  return response.data;
};
