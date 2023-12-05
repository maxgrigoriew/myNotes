import axios from 'axios'

export const API_URL = 'https://dist.nd.ru/api'

let config = {
  baseURL: API_URL,
  // withCredentials: true,
}

const http = axios.create(config)

http.interceptors.request.use((config) => {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')

  return config
})

export { http }