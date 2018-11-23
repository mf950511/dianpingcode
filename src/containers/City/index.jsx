import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActions from '../../actions/userInfo'
import Header from '../../components/Header/index'
import CurrentCity from '../../components/Currentcity/index'
import CityList from '../../components/CityList/index'
import {CITYNAME} from '../../config/localStorageKey'
import storage from 'good-storage'
class City extends Component {
  render(){
    return (
      <div>
        <Header title="选择城市" handleBack={this.handleBack.bind(this)}/>
        <CurrentCity cityName={this.props.userInfo.cityName}/>
        <CityList changeFn={this.changeCity.bind(this)}/>
      </div>
    )
  }
  handleBack(){
    window.history.back()
  }
  changeCity(newCity){
    if(newCity == null) {
      return
    }
    this.props.userInfoActions.update({
      cityName: newCity
    })
    storage.set(CITYNAME, newCity)
    console.log(this)
    this.props.history.push('/')
    // hashHistory.push('/')
  }
}

function mapStateToProps(state){
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)