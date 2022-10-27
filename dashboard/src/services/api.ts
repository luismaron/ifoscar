import axios, { AxiosRequestConfig } from "axios";


// axios.interceptors.request.use(
//   config => {
//     headers: {
//       common: {
//         Authorization: `Bearer ${localStorage.getItem('access_token')}`
//       }
//     }
//   }
// );

export const api = axios.create({
  baseURL: 'http://localhost:3334'
})


