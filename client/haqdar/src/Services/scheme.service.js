import axios from "axios";
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 20000,
});

export const registerScheme = async (data) => {
  const response = await API.post("/admin/add-scheme", data);
  return response.data;
};

export const getAllSchemes = async () => {
  const response = await API.get("/admin/schemes");
  return response.data;
};

export const updateScheme = async (id, data) => {
  const response = await API.put(`/admin/schemes/${id}`, data);
  return response.data;
};

export const deleteScheme = async(id) =>{
  const response = await API.delete(`/admin/schemes/${id}`);
  return response.data;
}

export const getSchemeById = async (id) => {
  const response = await API.get(`/admin/schemes/${id}`);
  return response.data;
};

export const uploadSchemes = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await API.post(`/admin/upload-schemes`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
