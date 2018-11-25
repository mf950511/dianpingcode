import {combineReducers} from 'redux'
import userInfo from './userInfo'
import store from './store'
const rootReducer = combineReducers({
  userInfo: userInfo,
  store: store
})
export default rootReducer