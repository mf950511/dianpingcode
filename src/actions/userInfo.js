import * as actionTypes from '../contants/userInfo'

export function updateCityName(data){
  return {
    type: actionTypes.UPDATE_CITYNAME,
    data
  }
}