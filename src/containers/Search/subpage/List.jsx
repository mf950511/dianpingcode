import React, {Component} from 'react'
import './style.less'
import {getHomeList} from '../../../api/home'
import HomeList from '../../../components/HomeList/index'
import LoadingMore from '../../../components/LoadingMore/index'
const initialState = {
  hasMore: false,
  list: [],
  isLoadingMore: false,
  page: 0
}
class List extends Component {
  constructor(props){
    super(props)
    this.state = initialState
  }
  render(){
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        
        {
          this.state.list.length 
          ? <HomeList homeList={this.state.list}/>
          : <div></div>
        }
        {
          this.state.hasMore
          ? <LoadingMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMore.bind(this)}/>
          : ''
        }
      </div>
    )
  }
  getHomeList(){
    let data = {
      cityName: this.props.cityName,
      page: this.state.page,
      keyWord: this.props.keyWord,
      category: this.props.category
    }
    getHomeList(data).then(({status, data}) => {
      let {hasMore, list} = data
      this.setState(state => ({
        hasMore,
        list: state.list.concat(list),
        isLoadingMore: false
      }))
    })
  }
  loadMore(){
    this.setState(state => ({
      page: state.page+1,
      isLoadingMore: true
    }))
    this.getHomeList()
  }
  componentDidMount() {
    this.getHomeList()
  }
  componentDidUpdate(prevProps, prevState){
    const keyWord = this.props.keyWord
    const category = this.props.category
    if(keyWord === prevProps.keyWord && category === prevProps.category) {
      return
    }
    this.setState(initialState)
    this.getHomeList()
  }
}
export default List