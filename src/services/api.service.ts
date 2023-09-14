import axios from 'axios'

import { API_ACCESS_TOKEN, BASE_URL } from 'src/constants'

export const apiService = axios.create({ baseURL: BASE_URL })

apiService.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${API_ACCESS_TOKEN}`
  return config
})
