import React, {Component} from 'react'
import SearchHeader from '../../components/SearchHeader/index'
import SearchList from './subpage/List'
class Search extends Component {
  render(){
    return (
      <div>
        <SearchHeader keyWord={this.props.location.query.key}/>
        <SearchList keyWord={this.props.location.query.key} category={this.props.match.params.category}/>
      </div>
    )
  }
  componentWillMount(){
    console.log(this.props.location.query.key)
  }
}
export default Search