import React, {Component} from 'react'
import './style.less'
import Item from './Item/index'
class HomeList extends Component {
  render(){
    const homeList = this.props.homeList
    console.log(homeList)
    return (
      <div className="list-container">
        {
          homeList.map((item, index) => {
            return <Item itemData={item} key={index}/>
          })
        }
      </div>
    )
  }
}
export default HomeList