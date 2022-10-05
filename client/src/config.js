import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://appusingmern.herokuapp.com/"
})

export default axiosInstance;