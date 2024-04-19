import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "./api";
let token = "";
// console.log(typeof window, "window");
export const getToken = () => {
  if (typeof window !== "undefined") {
    token = localStorage.getItem("accessToken") || "{}";
  }
  return token;
};

const useAxios = async (request) => {
  console.log(getToken(), "window");

  const resp = await axios.request({
    ...request,
    headers: {
      ...request.headers,
      authorization: `Bearer ${getToken()}`,
      // mode: "cors",
      'Content-Type': 'application/json',
    },

  });
 

  if (resp.status === 401) {
    console.log("clear");
    localStorage.clear();
  }
  return resp;
};
export default useAxios;
