import * as actionTypes from '../contants/userInfo'

const initialState = {}
export default function userInfo(state = initialState, action){
  switch(action.type) {
    case actionTypes.UPDATE_CITYNAME:
      return action.data
    default:
      return state
  }
}