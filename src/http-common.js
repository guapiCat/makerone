import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: `http://127.0.0.1:8567`,
  withCredentials:false
})
