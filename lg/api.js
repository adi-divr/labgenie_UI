import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Registration Error:', error.response?.data || error.message);
    throw error;
  }
};

// Login User
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login Error:', error.response?.data || error.message);
    throw error; 
  }
};