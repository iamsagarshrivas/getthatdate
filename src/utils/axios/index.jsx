import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE || "http://localhost:1337",
});

axiosInstance.interceptors.request.use((config) => {
  console.info({ config });
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error?.response)
);

export default axiosInstance;
