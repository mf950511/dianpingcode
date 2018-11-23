import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import SearchInput from '../SearchInput/index'
import './style.less'
class HomeHeader extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  render(){
    const oldUrl = this.context.router.route.location.pathname
    return (
      <div id="home-header" className="clear-fix">
          <Link to="/city">
            <div className="home-header-left float-left">
                <span>{this.props.cityName}</span>
                &nbsp;
                <i className="icon-angle-down"></i>
            </div>
          </Link>
          
          <div className="home-header-right float-right">
            <Link to={{pathname: '/login', query: {router: oldUrl}}}>
                <i className="icon-user"></i>
            </Link>
          </div>
          <div className="home-header-middle">
              <div className="search-container">
                  <i className="icon-search"></i>
                  <SearchInput enterHandle={this.handleEnter.bind(this)} value=''/>
                  {/* <input 
                  type="text" 
                  placeholder="请输入关键字"
                  onChange={this.handleChange.bind(this)}
                  onKeyUp={this.handleKeyUp.bind(this)}
                  value={this.state.keyWord}
                  /> */}
              </div>
          </div>
      </div>
    )
  }
  handleEnter(value){
    // this.props.history.push('/')
    this.context.router.history.push({pathname: '/search/all', query: {key: encodeURIComponent(value)}})
    // this.props.history.push('/search/all/' + this.state.keyWord)
  }
}
export default HomeHeader