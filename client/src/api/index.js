import axios from 'axios';

let token = localStorage.token;
if (!token) {
  localStorage.token = Math.random().toString(36).substr(-8);
  token = localStorage.token;
}

const BASE_URL = 'http://localhost:3001';
const HEADERS = {
  'Authorization': token,
  'Accept': 'application/json'
};

export const getPosts = () => {
  return axios.get(`${BASE_URL}/posts`, { headers: HEADERS })
              .then(posts => posts);}

export const getCategories = () => {
  return axios.get(`${BASE_URL}/categories`, { headers: HEADERS })
              .then(categories => categories);}
