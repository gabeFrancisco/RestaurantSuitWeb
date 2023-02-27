import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import loginService from "./loginService";

const apiService = axios.create({
  baseURL: "http://10.0.10.250:5001/api",
  timeout: 10000,
});

apiService.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    apiService.defaults.headers.common["Authorization"] = `Bearer ${loginService.getToken()}`
    apiService.defaults.headers.post["Content-Type"] = "application/json";

    return config;
  },
);

apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
			// loginService.logoutUser()
			// window.location.pathname = '/login'
    }
  }
)

const config: AxiosRequestConfig = {};
apiService(config);

export default apiService;
