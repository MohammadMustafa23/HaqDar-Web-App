import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

export const downloadSchemePdf = async (schemeId) => {

    return API.get(
        `/pdf/download/${schemeId}`,
        {
            responseType: "blob",
            withCredentials: true
        }
    );
};
