import React,{Component} from 'react'
import HomeAd from '../../../components/HomeAd/index'
import {getAdList} from '../../../api/home'
class Ad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adList: []
    }
  }
  render(){
    return (
      <div>
        {
          this.state.adList.length
          ? <HomeAd data={this.state.adList}/>
          : <div></div>
        }
      </div>
    )
  }
  getAdList(){
    getAdList().then(({status, data}) => {
      console.log(status, data)
      if(status === 200 && data.length) {
        this.setState({
          adList: data
        })
      }
    }).catch(err => {
      console.log('首页广告加载错误')
    })
  }
  componentDidMount(){
    this.getAdList()
  }
}
export default Ad