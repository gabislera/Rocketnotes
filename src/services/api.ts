import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-h0w0.onrender.com',
})
