import React, {Component} from 'react'
import './style.less'
class LoginComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      phone: '',
      password: ''
    }
  }
  render(){
    return (
      <div id="login-container">
        <div className="input-container phone-container">
            <i className="icon-tablet"></i>
            <input 
                type="text" 
                placeholder="输入手机号" 
                onChange={this.changeHandle.bind(this)} 
                value={this.state.phone}
            />
        </div>
        <div className="input-container password-container">
            <i className="icon-key"></i>
            <button type="button">发送验证码</button>
            <input type="text" placeholder="输入验证码"/>
        </div>
        <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
      </div>
    )
  }

  changeHandle(e){
    this.setState({
      phone: e.target.value
    })
  }

  clickHandle(){
    const username = this.state.phone
    this.props.loginHandle(username)
  }

  componentDidMount(){
    console.log(this.props.loginHandle)
  }
}
export default LoginComponent