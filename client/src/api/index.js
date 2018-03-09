import axios from 'axios';
import { v4 } from 'uuid';

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

export const getPost = (id) => {
  return axios.get(`${BASE_URL}/posts/${id}`, { headers: HEADERS })
              .then(post => post);}

export const getPostComments = (post_id) => {
  return axios.get(`${BASE_URL}/posts/${post_id}/comments`, { headers: HEADERS})
              .then(comments => comments);}

export const postVote = (id, option) => {
  return axios.post(`${BASE_URL}/posts/${id}`, { option: option }, { headers: HEADERS })
              .then(vote => vote);}

export const deletePost = (id) => {
  return axios.delete(`${BASE_URL}/posts/${id}`, { headers: HEADERS })
              .then(post => post);}

export const createPost = data => {
  return axios.post(`${BASE_URL}/posts`, {
    ...data,
    id: v4(),
    timestamp: Date.now()
  }, { headers: HEADERS })
  .then(post => post.data);}

export const editPost = (id, data) => {
  return axios.put(
    `${BASE_URL}/posts/${id}`, 
    data, 
    { headers: HEADERS }
  )
  .then(post => post.data);}

export const getCategories = () => {
  return axios.get(`${BASE_URL}/categories`, { headers: HEADERS })
              .then(categories => categories);}

export const createComment = data => {
  return axios.post(`${BASE_URL}/comments`, {
    ...data,
    id: v4(),
    timestamp: Date.now()
  }, 
  { headers: HEADERS }
  )
  .then(comment => comment.data);}

export const editComment = (id, data) => {
  return axios.put(
    `${BASE_URL}/comments/${id}`, 
    data, 
    { headers: HEADERS }
  )
  .then(comment => comment.data);}

  export const deleteComment = (id) => {
    return axios.delete(`${BASE_URL}/comments/${id}`, { headers: HEADERS })
                .then(comment => comment);}
