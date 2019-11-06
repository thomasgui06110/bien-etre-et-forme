import axios from "axios";
import jwtDecode from "jwt-decode";
import { LOGIN_API } from "../config";

function logout() {
  window.localStorage.removeItem("authToken");
  delete axios.defaults.headers["Authorization"];
}
const [Names] = ""
function authenticate(credentials) {
  return axios
    .post(LOGIN_API, credentials)
    .then(response => response.data.token)
    .then(token => {
      // stoke le token dans le local storage
      window.localStorage.setItem("authToken", token);

      //On previent axios que l'on a un header par defaut
      setAxiosToken(token);
     
    });
}
function nameUser() {
  const token = window.localStorage.getItem("authToken");


  if (token) {
    const { exp: expiration } = jwtDecode(token);
    
    if (expiration * 1000 > new Date().getTime()) {
     const {firstName: Names} = jwtDecode(token);
     
    } else {
      console.log("HELLO TROP TARD ");
      
    }
  }
}

function setAxiosToken(token) {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
}
function setup() {
  // 1. Voir si on a token
  const token = window.localStorage.getItem("authToken");
 
  // 2. si le token est encore valide
  if (token) {
    const { exp: expiration } = jwtDecode(token);
    
    if (expiration * 1000 > new Date().getTime()) {
      setAxiosToken(token);
    } else {
      console.log("PAS DE TOKEN");
      logout();
    }
  }
}

function isAuthenticated() {
  // 1. Voir si on a token
  const token = window.localStorage.getItem("authToken");


  // 2. si le token est encore valide
  if (token) {
    const { exp: expiration } = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

export default {
  authenticate,
  logout,
  setup,
  isAuthenticated,
  nameUser
};
