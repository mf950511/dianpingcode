import React, {Component} from 'react'
import './style.less'
import SearchInput from '../SearchInput/index'
import PropTypes from 'prop-types'
class SearchHeader extends Component {
  render(){
    return (
      <div id="search-header" className="clear-fix">
          <span className="back-icon float-left" onClick={this.handleBack.bind(this)}>
              <i className="icon-chevron-left"></i>
          </span>
          <div className="input-container">
              <i className="icon-search"></i>
              &nbsp;
              <SearchInput value={this.props.keyword || ''} enterHandle={this.handleEnter.bind(this)}/>
          </div>
      </div>
    )
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  handleBack(){
    this.context.router.history.goBack()
  }
  handleEnter(value){
    this.context.router.history.push('/search/all/' + encodeURIComponent(value))
  }
  componentDidMount(){

  }
}
export default SearchHeader