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
              <i className="icon-user"></i>
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
    this.context.router.history.push('/search/all/' + encodeURIComponent(value))
    // this.props.history.push('/search/all/' + this.state.keyWord)
  }
}
export default HomeHeader