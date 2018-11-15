import {combineReducers} from 'redux'
import userInfo from './userInfo'
const rootReducer = combineReducers({
  userInfo: userInfo
})
export default rootReducer