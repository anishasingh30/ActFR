import axios from 'axios';

const API_URL = 'http://localhost:3006/api/auth'; // Adjust to match your backend

// Login
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data; // { token, user }
};

// Register
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data; // { message: 'User registered successfully' }
};
