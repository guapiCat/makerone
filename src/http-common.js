import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: `http://192.168.0.104:8080`,
  withCredentials:false
})
