import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: `http://192.168.0.102:8080`,
  withCredentials:false
})
AXIOS.interceptors.request.use(config =>{
  if (sessionStorage.getItem("TID") && sessionStorage.getItem("UID")){
    config.headers.token = sessionStorage.getItem("TID");
    config.headers.UID = sessionStorage.getItem("UID");
  }
  return config
}, error => {
  return promise.reject(error)
});
