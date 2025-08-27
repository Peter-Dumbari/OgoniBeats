import axios from "axios";

const BaseURL = process.env.VITE_APP_BASE_URL;

const setBaseURL = (url) => {
  return `${BaseURL}${url}`;
};

const axiosInstance = axios.create({
  baseURL: BaseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return token;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
