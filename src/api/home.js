import axios from 'axios'
import {baseUrl} from './config'
export function getAdList(data) {
  const url = baseUrl + '/ad'
  return axios.get(url, {params: data})
}