import React, {Component} from 'react'
import SearchHeader from '../../components/SearchHeader/index'
import SearchList from './subpage/List'
class Search extends Component {
  render(){
    return (
      <div>
        <SearchHeader keyWord={this.props.match.params.key}/>
        <SearchList keyWord={this.props.match.params.key} category={this.props.match.params.category}/>
      </div>
    )
  }
  componentWillMount(){
  }
}
export default Search