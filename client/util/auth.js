import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/users";

export async function register(data) {
  const response = await axios.post(API_URL + "/signup", data);
  return response;

  // const response = await fetch(API_URL + "/signup", {
  //   // mode: "cors",
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  // //   const user = response.json();
  // return await response.json();
}

export async function login(data) {
  const response = await axios.post(API_URL + "/login", data);
  console.log(12);
  return response;

  // const response = await axios({
  //   method: "POST",
  //   url: API_URL + "/login",
  //   data: data,
  // });

  // return response;

  // const response = await fetch(API_URL + "/login", {
  //   // mode: "cors",
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  // //   const user = response.json();
  // return await response.json();
}
