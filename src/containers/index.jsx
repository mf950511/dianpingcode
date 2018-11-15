import React, {Component} from 'react'
import storage from 'good-storage'
import {CITYNAME} from '../config/localStorageKey'
import RouterIndex from './routerIndex'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActions from '../actions/userInfo'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initDone: true
    }
  }
  render(){
    return (
      <div className="app">
        {
          this.state.initDone ? 
          <RouterIndex/> : 
          <p>loading...</p>
        }
      </div>
    )
  }
  componentDidMount(){
    let cityName = storage.get(CITYNAME)
    if(cityName == null) {
      cityName = '成都'
    }
    this.props.userInfoActions.updateCityName({
      cityName
    })
    // setTimeout(()=> {
    //   this.setState({
    //     initDone: true
    //   })
    // },2000)
  }
}
function mapStateToProps(state){
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)