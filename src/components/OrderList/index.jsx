import React, {Component} from 'react'
import Item from './Item/index'
class OrderList extends Component {
  render(){
    const orderList = this.props.orderList
    return (
      <div>
        {
          orderList.map((item, index) => {
            return <Item key={index} data={item} commentHandle={this.props.commentHandle}/>
          })
        }
      </div>
    )
  }
  componentDidMount(){
    console.log(123,this.props.orderList)
  }
}
export default OrderList