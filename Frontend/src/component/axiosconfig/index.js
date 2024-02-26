import axios from 'axios';
const baseURL = "http://localhost:8081";
const instance = axios.create({
    baseURL:baseURL
})

export default axios;