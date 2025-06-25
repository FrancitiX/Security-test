import axios from "axios";
import { URI_back } from "./auth-data";

async function createUser(formData) {
  try {
    const response = await axios.post(`${URI_back}/newUser`, formData);

    return response.data.status;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

async function login(user, password) {
  
  try {
    const response = await axios.post(`${URI_back}/login`, { user, password });
    localStorage.setItem("userToken", response.data.token);
    localStorage.setItem("userType", response.data.type);

    return response.data.status;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

async function getUser() {
  try {
    const response = await axios.get(`${URI_back}/userData`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

export { createUser, getUser, login };
