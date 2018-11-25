import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../../components/Header/index'
import UserInfo from '../../components/UserInfo/index'
import OrderList from './subpage/OrderList'
class User extends Component {
  render(){
    return (
      <div>
        <Header title="用户中心" handleBack={this.handleBack.bind(this)}/>
        <UserInfo userInfo={this.props.userInfo}/>
        <OrderList username={this.props.userInfo.username}/>
      </div>
    )
  }
  componentDidMount(){
    console.log(this.props)
    const userInfo = this.props.userInfo
    if(!userInfo.username) {
      this.props.history.push({pathname: '/login', query:{router:'/user'}})
    }
  }
  handleBack(){
    this.props.history.push('/')
  }
}
function mapStateToProps(state){
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch){
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)