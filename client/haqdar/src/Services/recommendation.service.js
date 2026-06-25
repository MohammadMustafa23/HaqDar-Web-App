import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/schemes",
  withCredentials: true,
});

export const generateRecommendations = async (profileData) => {
  const response = await API.post("/recommendations/generate",profileData);
  return response.data;
};

export async function getAllMatchedSchemes() {
  const response = await API.get("/all/schemes");
  return response.data;
}

export async function getMatchedSchemes() {
  const response = await API.get("/my-schemes");
  return response.data;
}

export const requestProfileEdit = async () => {
  const response = await API.post("/request-profile-edit");
  return response.data;
};

export const canEditProfile = async () => {
  const response = await API.get("/can-edit-profile");
  return response.data;
};