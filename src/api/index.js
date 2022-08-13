import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) =>
  axios.post(`${URL}/posts/update`, payload);
export const registeredUser = (payload) => axios.get(`${URL}/posts/register`,payload);
export const loginUser = (payload)=> axios.post(`${URL}/posts/login`,payload);