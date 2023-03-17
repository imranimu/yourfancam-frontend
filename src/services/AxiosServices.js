import axios from 'axios';
import AuthServices from './AuthServices';

let headers = {
    "Content-Type": 'application/json'
};

const BASE_API_URL = 'https://services.yourfancam.com/api/v1';

if(AuthServices.isAuthenticated){
    headers.Authorization = `Bearer ${AuthServices.getAccessToken()}`
}

const axiosServices = axios.create({
    baseURL: BASE_API_URL,
    headers
});

export default axiosServices;