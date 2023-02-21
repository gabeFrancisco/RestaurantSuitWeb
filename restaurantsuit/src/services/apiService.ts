import axios from 'axios'
import loginService from './loginService';

const apiService = axios.create({
    baseURL: "http://10.0.10.250:5001/api"
})

apiService.defaults.headers.common["Authorization"] = loginService.checkAuth()
? "Bearer " + loginService.getToken()
: "";
apiService.defaults.headers.post["Content-Type"] = "application/json";

export default apiService