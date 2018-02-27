import axios from 'axios'

var token = sessionStorage.getItem("TID");
var userId = sessionStorage.getItem("UID");
if (typeof (token) == "undefined" || typeof (userId) == "undefined"){
  token = '';
  userId = '';
}

export const AXIOS = axios.create({
  baseURL: `http://192.168.0.103:8080`,
  withCredentials:false,
  headers:{
    token: token,
    userId: userId
  }
})
