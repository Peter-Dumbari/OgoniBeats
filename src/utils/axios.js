const axios = require("axios");

const BASE_URL = process.env.VITE_APP_BASE_URL;

const setBaseURL = (url) => {
  return `${BASE_URL}${url}`;
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

module.exports = axios;
