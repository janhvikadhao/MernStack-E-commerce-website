import axios from "axios";

const axiosInstance = axios.create({
  // Use a relative path so the Vite proxy can intercept it
  baseURL: "/api", 
  withCredentials: true,
});

export default axiosInstance;