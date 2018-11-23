import * as actionTypes from '../contants/userInfo'

export function update(data){
  return {
    type: actionTypes.UPDATE_CITYNAME,
    data
  }
}