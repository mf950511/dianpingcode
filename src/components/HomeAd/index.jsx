import React, {Component} from 'react'
import './style.less'
class HomeAd extends Component {
  render(){
    return (
      <div id="home-ad">
          <h2>超值特惠</h2>
          <div className="ad-container clear-fix">
              {this.props.data.map((item, index) => {
                return <div key={index} className="ad-item float-left">
                  <a href={item.link}>
                    <p className={item.class}>{item.title}</p>
                    <img src={item.img} alt={item.title}/>
                  </a>
                </div>
              })}
          </div>
      </div>
    )
  }
}
export default HomeAd