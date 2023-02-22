import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/movies";

export async function getAllMovies() {
  const response = await axios.get(API_URL);
  return response;
}

export async function uploadMovie(data) {
  const response = await axios.post(API_URL, data);
  return response.data;
}

export async function uploadMovieCover(data) {
  const response = await axios.post(API_URL + "/uploadMovieCover", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
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

export async function uploadProfilePicture(data) {
  const response = await axios.post(API_URL_USER + "/uploadProfile", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export async function updateUser(id, data) {
  const response = await axios({
    method: "patch",
    url: API_URL_USER + `/${id}`,
    data: data,
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
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

export async function getReview(id) {
  const response = await axios.get(API_URL + `/${id}/review`);
  return response;
}
export async function updateReview(id, data) {
  const response = await axios.patch(API_URL_REVIEW + `/${id}`, data);

  return response;
}

export async function deleteReview(id) {
  const response = await axios.patch(API_URL_REVIEW + `/${id}`);

  return response;
}

// CART HANDLER
const API_URL_CART = "http://localhost:8080/api/vi/carts";

export async function postCart(id, data) {
  const response = await axios.post(API_URL + `/${id}/cart`, data);
  return response;
}

export async function getAllCarts(id) {
  const response = await axios.get(API_URL + `/${id}/cart`);
  return response;
}

export async function updateCart(id, data) {
  const response = await axios.patch(API_URL_CART + `/${id}`, data);
  return response;
}

export async function deleteCart(id) {
  const response = await axios.delete(API_URL_CART + `/${id}`);
  return response;
}

// watchlist handler;
const API_URL_WATCHLIST = "http://localhost:8080/api/vi/watchlists";
export async function addWatchlists(data) {
  const response = await axios.post(API_URL_WATCHLIST, data);
  return response;
}

export async function getWatchlists() {
  const response = await axios.get(API_URL_WATCHLIST);
  return response;
}
export async function deleteWatchlists(id) {
  const response = await axios.delete(API_URL_WATCHLIST + `/${id}`);
  return response;
}
