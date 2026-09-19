import axios from "axios";

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_FRONTEND_URL+'/api',
})

export default axiosInstance;