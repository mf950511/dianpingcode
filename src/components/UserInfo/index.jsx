import React, {Component} from 'react'
import './style.less'
class UserInfo extends Component {
  render(){
    return (
      <div className="userinfo-container">
          <p>
              <i className="icon-user"></i>
              &nbsp;
              <span>{this.props.userInfo.username}</span>
          </p>
          <p>
              <i className="icon-map-marker"></i>
              &nbsp;
              <span>{this.props.userInfo.cityName}</span>
          </p>
      </div>
    )
  }
}
export default UserInfo