import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/pdf",
  withCredentials: true,
});

export const downloadSchemePdf = async (schemeId) => {
    return API.get(
        `/download/${schemeId}`,
        {
            responseType: "blob",
            withCredentials: true
        }
    );

};
