import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import loginService from "./loginService";

const API_URLS = [
  "http://10.0.10.250:5001/api",
  "https://localhost:5001/api"
]

const apiService = axios.create({
  baseURL: API_URLS[1],
  timeout: 10000,
});

apiService.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    try{
      apiService.defaults.headers.common["Authorization"] = `Bearer ${loginService.getToken()}`
      apiService.defaults.headers.post["Content-Type"] = "application/json";
  
      return config;
    }
    catch(error){
      if(!window.navigator.onLine){
        alert("No internet connection!")
      }
      return config;
    }
  },
);

apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
			loginService.logoutUser()
			window.location.pathname = '/login'
    }
  }
)

const config: AxiosRequestConfig = {};
apiService(config);

export default apiService;
