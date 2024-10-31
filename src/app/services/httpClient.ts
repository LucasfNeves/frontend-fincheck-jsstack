import axios from "axios";
import { localStorageKeys } from "../config/localStorageKeys";
import { sleep } from "../utils/sleep";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

// Interceptor para adicionar o token de autenticação nas requisições
httpClient.interceptors.request.use(config => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if(accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  } 

  return config
})

httpClient.interceptors.response.use( async data => {
  await sleep(1500); // Simulando um delay de 1.5s

  return data;
} )



