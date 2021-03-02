import axios from 'axios'
import { API_BASE_URL, API_EXTERNAL_URL } from '../constants'


const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})


export const makeCall = (method, url, data = {}, headers = {}, params = {}, extra = {}) => {
  return client.request({
    method,
    data,
    url,
    headers,
    params,
    ...extra
  })
}


const externalClient = axios.create({
  baseURL: API_EXTERNAL_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})


export const makeExternalCall = (method, url, data = {}, headers = {}, params = {}, extra = {}) => {
  return externalClient.request({
    method,
    data,
    url,
    headers,
    params,
    ...extra
  })
}
