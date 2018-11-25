import axios from 'axios'
import {baseUrl} from './config'
export function getOrderList(data) {
  const url = baseUrl + '/orderList'
  return axios.post(url, data)
}

export function postComment(data) {
  const url = baseUrl + '/postComment'
  return axios.post(url, data)
}