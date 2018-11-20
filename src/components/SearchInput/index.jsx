import React, {Component} from 'react'
import './style.less'
class SearchInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }
  render(){
    return (
      <input type="text"
      onChange={this.handleChange.bind(this)}
      onKeyUp={this.handleKeyUp.bind(this)}
      value={this.state.value}
      placeholder="请输入关键字"
      className="search-input"/>
    )
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  handleKeyUp(e) {
    if(e.keyCode !== 13) {
      return
    }
    this.props.enterHandle(this.state.value)
  }
  componentDidMount(){
    this.setState({
      value: this.props.value || ''
    })
  }
}
export default SearchInput
