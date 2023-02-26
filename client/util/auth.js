import axios from "axios";

// const API_URL = "http://localhost:8080/api/v1/users";
const API_URL = "https://cinema-full.onrender.com/api/v1/users";

export async function register(data) {
  const response = await fetch(API_URL + "/signup", {
    // mode: "cors",
    method: "POST",
    // credentials: "include",
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

export async function updatePassword(id, data) {
  const response = await axios.patch(API_URL + `/updateMyPassword/${id}`, data);
  return response;
}

/////////////////////////
// tickets handler

export async function createTicket(id, data) {
  const response = await axios.post(API_URL + `/${id}/ticket`, data);
  return response;
}

export async function getAllTickets(id) {
  const response = await axios.get(API_URL + `/${id}/ticket`);
  return response;
}
