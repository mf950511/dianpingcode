import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActions from '../../actions/userInfo'
import Header from '../../components/Header/index'
import LoginComponent from '../../components/LoginComponent/index'
import './style.less'
class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      checking: true
    }
  }
  render(){
    return (
      <div>
        <Header title="登陆" handleBack={this.handleBack.bind(this)}/>
        {
          this.state.checking
          ? <div>{/* 等待中 */}</div>
          : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
        }
      </div>
    )
  }

  handleBack(){}
  componentDidMount(){
    console.log(this.props.location.query)
    this.doCheck()
  }
  // 登陆成功之后的处理
  loginHandle(username){
    console.log(username)
    const actions = this.props.userInfoActions
    let userInfo = this.props.userInfo
    userInfo.username = username
    actions.update(userInfo)
    console.log(this.props.userInfo)
    const query = this.props.location.query
    if(query) {
      const router = query.router
      this.props.history.replace(router)
    }else {
      this.goUserPage()
    }
    
  }

  doCheck(){
    const userInfo = this.props.userInfo
    if(userInfo.username) {
      this.goUserPage()
    } else {
      this.setState({
        checking: false
      })
    }
  }

  goUserPage(){
    this.props.history.push('/user')
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
)(Login)