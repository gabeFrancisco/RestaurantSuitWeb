import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import loginService from "./loginService";

const apiService = axios.create({
  baseURL: "http://10.0.10.250:5001/api",
});

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    apiService.defaults.headers.common["Authorization"] =
      loginService.checkAuth() ? "Bearer " + loginService.getToken() : "";
    apiService.defaults.headers.post["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    if (error.response.status == 401) {
			loginService.logoutUser()
			window.location.href = '/login'
    }
  }
);

const config: AxiosRequestConfig = {};
axios(config);

export default apiService;
