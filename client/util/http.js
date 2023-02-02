import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/movies";

export async function getAllMovies() {
  const response = await axios.get(API_URL);
  return response;
}

export async function uploadMovie(data) {
  // const response = await axios.post(API_URL, data);
  // return response;
  const response = await fetch(API_URL, {
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

export async function updatemovie(id, data) {
  const response = await axios.patch(API_URL + `/${id}`, data);

  return response;
}

export async function deletemovie(id) {
  const response = await axios.delete(API_URL + `/${id}`);

  return response;
}

// USER
const API_URL_USER = "http://localhost:8080/api/v1/users";

export async function getAllUsers() {
  const response = await axios.get(API_URL_USER);

  return response;
}

export async function getUser(id) {
  const response = await axios.get(API_URL_USER + `/${id}`);

  return response;
}
export async function updateUserAdmin(id, data) {
  const response = await axios.patch(API_URL_USER + `/${id}/admin`, data);

  return response;
}

export async function updateUser(id, data) {
  const response = await axios.patch(API_URL_USER + `/${id}`, data);

  return response;
}

export async function deleteUserAdmin(id) {
  const response = await axios.delete(API_URL_USER + `/${id}/admin`);

  return response;
}

const API_URL_REVIEW = "http://localhost:8080/api/v1/reviews";

export async function createReview(id, data) {
  const response = await axios.post(API_URL + `/${id}/review`, data);
  return response;
}

export async function getAllReviews(id) {
  const response = await axios.get(API_URL + `/${id}/review`);
  return response;
}
