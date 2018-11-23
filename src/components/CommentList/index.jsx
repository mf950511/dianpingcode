import React, {Component} from 'react'
import Item from './Item/index'
import './style.less'
class CommentList extends Component {
  render(){
    const data = this.props.list
    return (
      <div className="comment-list">
          {data.map((item, index) => {
              return <Item key={index} data={item}/>
          })}
      </div>
    )
  }
}
export default CommentList