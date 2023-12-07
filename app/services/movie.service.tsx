import axios from "axios"

const API_KEY="ADADJNAKSDJANSD"
const API_BASE_URL= "https://api.themoviedb.org/3"

const client = axios.create({
    baseURL: API_BASE_URL,
    params: {api_key: API_KEY}
})