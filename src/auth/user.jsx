import axios from "axios";
import { URI_back } from "./auth-data";

function login(user, password) {
    console.log("Logging in with:", user, password);
  return axios
    .post(`${URI_back}/login`, { user, password })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error logging in:", error);
      throw error;
    });
}

function getUser() {
  return axios
    .get(`${URI_back}/userData`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching user:", error);
      throw error;
    });
}

export { getUser, login };
