import axios from "axios";
import { getApiUrl, getToken } from "../helpers";

export const api = axios.create({
  baseURL: getApiUrl(),
  responseType: "json",
});

// axios.interceptors.request.use((config) => {
  //   const token = getToken();
  //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    //   return config;
    // });

    api.defaults.withCredentials = true;
api.interceptors.request.use((config: any) => {
  if (!config) config = {};
  if (!config.headers) config.headers = {};

  const token = getToken();
  console.log(token);

  config.headers.Authorization = token ? `Bearer ${token}` : ``;

  return config;
});
