import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: `http://000.000.0.000:8080`,
  withCredentials:false,
    test:1
})
AXIOS.interceptors.request.use(config =>{
  if (sessionStorage.getItem("TID") && sessionStorage.getItem("UID")){
    config.headers.token = sessionStorage.getItem("TID");
    config.headers.UID = sessionStorage.getItem("UID");
  }
  return config
}, error => {
  return Promise.reject(error)
});
AXIOS.interceptors.response.use(response => {
  if (response.data == 1000) {
      sessionStorage.removeItem("TID");
      sessionStorage.removeItem("UID");
      sessionStorage.removeItem("loginCasType");
      sessionStorage.removeItem("psonImg");
      sessionStorage.removeItem("psonName");
      location.href='/login/1';
  }
  return response
}, error => {
  return Promise.reject(error)
});
