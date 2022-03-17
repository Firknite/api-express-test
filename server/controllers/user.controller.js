import axiosService from "../services/axios.service";

export function getUser(req) {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";
  return axiosService.get(baseUrl);;
}
