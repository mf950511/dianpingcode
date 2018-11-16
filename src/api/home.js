import axios from 'axios'
import {baseUrl} from './config'
export function getAdList(data) {
  const url = baseUrl + '/ad'
  return axios.get(url, {params: data})
}

export function getHomeList(data) {
  const url = baseUrl + '/homelist'
  return axios.post(url, data)
}