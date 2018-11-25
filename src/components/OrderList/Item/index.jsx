import React, {Component} from 'react'
import './style.less'
class Item extends Component {
  constructor(props){
    super(props)
    this.state = {
      commentState: 2,
      commentContent: ''
    }
  }
  render(){
    const data = this.props.data
    return (
      <div className="clear-fix order-item-container">
          <div className="order-item-img float-left">
              <img src={data.img} alt=""/>
          </div>
          <div className="order-item-comment float-right">
            {
              this.state.commentState === 0
              ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
              : this.state.commentState === 1
                ? ''
                : <button className="btn unseleted-btn">已评价</button>
            }
              
          </div>
          <div className="order-item-content">
              <span>商户：{data.title}</span>
              <span>数量：{data.count}</span>
              <span>价格：￥{data.price}</span>
          </div>
          {
            this.state.commentState === 1
            ? <div className="comment-text-container">
                <textarea style={{width: '100%', height: '80px'}} className="comment-text" onChange={this.changeHandle.bind(this)} value={this.state.commentContent}></textarea>
                <button className="btn" onClick={this.commentHandle.bind(this)}>提交</button>
                &nbsp;
                <button className="btn unseleted-btn" onClick={this.hideClick.bind(this)}>取消</button>
              </div>
            : ''
          }
      </div>
    )
  }
  showComment(){
    this.setState({
      commentState: 1
    })
  }
  hideClick(){
    this.setState({
      commentState: 0
    })
  }
  changeHandle(e){
    this.setState({
      commentContent: e.target.value
    })
  }
  commentSuccess(){
    this.setState({
      commentState: 2
    })
  }
  commentHandle(){
    let data = {
      id: this.props.data.id,
      comment: this.state.commentContent.trim()
    }
    if(!data.comment) {
      return
    }
    this.props.commentHandle(data, this.commentSuccess.bind(this))
  }
  componentDidMount(){
    this.setState({
      commentState: this.props.data.commentState
    })
  }
}
export default Item