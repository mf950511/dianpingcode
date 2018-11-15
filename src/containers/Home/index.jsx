import React, {Component} from 'react'
import { connect } from 'react-redux'
// import Banner from './subpage/banner'
import HomeHeader from '../../components/HomeHeader/index'
import Category from '../../components/Category/index'
import {getAdList} from '../../api/home'
import './index.less'
class Home extends Component {
  render(){
    return (
      <div>
        <HomeHeader cityName={this.props.userInfo.cityName}/>
        <Category/>
        {/* <Banner/> */}
      </div>
    )
  }
  getAdList(){
    getAdList().then(res => {
      console.log(res)
    })
  }
  componentDidMount(){
    this.getAdList()
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)