import React, {Component} from 'react'
import './style.less'
class CityList extends Component {
  constructor(props){
    super(props)
    this.state = {
      cityList: ['北京','上海','杭州','广州','苏州','深圳','南京','天津','重庆','厦门','武汉','西安']
    }
  }
  render(){
    return (
      <div className="city-list-container">
        <h3>热门城市</h3>
        <ul className="clear-fix">
          {this.state.cityList.map((item, index) => {
            return <li key={index} onClick={this.clickHandle.bind(this, item)}><span>{item}</span></li>
          })}
          {/* <li onClick={this.clickHandle.bind(this, '北京')}>北京</li>
          <li onClick={this.clickHandle.bind(this, '上海')}>上海</li>
          <li onClick={this.clickHandle.bind(this, '杭州')}>杭州</li> */}
        </ul>
      </div>
    )
  }
  clickHandle(cityName){
    this.props.changeFn(cityName)
  }
}

export default CityList