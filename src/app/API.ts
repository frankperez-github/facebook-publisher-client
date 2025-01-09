import axios from 'axios';

const api_url = process.env.NEXT_PUBLIC_API_URL
const API = axios.create({
    baseURL: `${api_url}/`
})

export default API;