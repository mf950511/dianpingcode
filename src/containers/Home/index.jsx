import React, {Component} from 'react'
import { connect } from 'react-redux'
// import Banner from './subpage/banner'
import HomeHeader from '../../components/HomeHeader/index'
import Category from '../../components/Category/index'
import Ad from './subpage/Ad'
import List from './subpage/List'
import './index.less'
class Home extends Component {
  render(){
    return (
      <div>
        <HomeHeader cityName={this.props.userInfo.cityName}/>
        <Category/>
        <div style={{height: '15px'}}></div>
        <Ad/>
        <List cityName={this.props.userInfo.cityName}/>
        {/* <Banner/> */}
      </div>
    )
  }
  componentDidMount(){
    console.log(this.props.userInfo)
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