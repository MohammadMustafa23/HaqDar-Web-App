import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/schemes",
  withCredentials: true,
});

export const generateRecommendations = async (profileData) => {
  const response = await API.post(
    "/recommendations/generate",
    profileData
  );

  return response.data;
};