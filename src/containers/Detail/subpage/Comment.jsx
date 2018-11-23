import React, {Component} from 'react'
import {getCommentData} from '../../../api/detail'
import LoadingMore from '../../../components/LoadingMore/index'
import CommentList from '../../../components/CommentList/index'
import './style.less'
class Comment extends Component{
  constructor(props){
    super(props)
    this.state = {
      commentList: [],
      page: 0,
      isLoadingMore: false,
      hasMore: false
    }
  }
  render(){
    return (
      <div className="detail-comment-subpage">
        <h2>用户点评</h2>
        {
          this.state.commentList.length
          ? <CommentList list={this.state.commentList}/>
          : <div></div>
        }
        {
          this.state.hasMore
          ? <LoadingMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreFn.bind(this)}/>
          : ''
        }
      </div>
    )
  }
  getCommentData(){
    let data = {
      page: this.state.page,
      id: this.props.id
    }
    getCommentData(data).then(res => {
      let {hasMore, data} = res.data
      this.setState(state => ({
        isLoadingMore: false,
        hasMore: hasMore,
        commentList: state.commentList.concat(data)
      }))
    })
  }
  loadMoreFn(){
    this.setState(state => ({
      page: state.page + 1,
      isLoadingMore: true
    }))
    this.getCommentData()
  }
  componentDidMount(){
    this.getCommentData()
  }
}
export default Comment