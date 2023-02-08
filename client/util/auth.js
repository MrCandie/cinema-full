import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/users";

export async function register(data) {
  const response = await fetch(API_URL + "/signup", {
    // mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  //   const user = response.json();
  return await response.json();
}

export async function login(data) {
  const response = await axios.post(API_URL + "/login", data);
  return response;
}

export async function forgotPassword(data) {
  const response = await axios.post(API_URL + "/forgotPassword", data);
  return response;
}
