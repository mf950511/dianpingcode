import React, {Component} from 'react'
import {getOrderList, postComment} from '../../../api/user'
import OrderListComponent from '../../../components/OrderList/index'
import './style.less'
class OrderList extends Component {
  constructor(props){
    super(props)
    this.state = {
      orderList: []
    }
  }
  render(){
    return (
      <div className="order-list-container">
        <h2>您的订单</h2>
        {
          this.state.orderList.length
          ? <OrderListComponent orderList={this.state.orderList} commentHandle={this.commentHandle.bind(this)}/>
          : ''
        }
        
      </div>
    )
  }
  getOrderList(){
    let data = {
      username: this.props.username
    }
    getOrderList(data).then(res => {
      this.setState({
        orderList: res.data
      })
      console.log(this.state.orderList)
    })
  }
  commentHandle(data,callback) {
    postComment(data).then(res => {
      console.log(res)
      if(res.data.code === 200) {
        callback()
      }
    })
  }
  componentDidMount(){
    console.log(this.props.username)
    this.getOrderList()
  }
}
export default OrderList