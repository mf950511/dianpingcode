import {baseUrl} from './config'
import axios from 'axios';
// 获取商户信息
export function getInfoData(data){
  const url = baseUrl + '/detailInfo'
  return axios.get(url, {params: data})
}
// 获取评论列表
export function getCommentData(data){
  const url = baseUrl + '/commentList'
  return axios.post(url, data)
}