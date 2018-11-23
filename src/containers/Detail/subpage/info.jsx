import React, {Component} from 'react'
import {getInfoData} from '../../../api/detail'
import DetailInfo from '../../../components/DetailInfo/index'
class Info extends Component {
  constructor(props){
    super(props)
    this.state = {
      detailInfo: false
    }
  }
  render(){
    return (
      <div>
        <DetailInfo data={this.state.detailInfo}/>
      </div>
    )
  }
  getInfoData(){
    getInfoData({id: this.props.id}).then(res => {
      if(res.status === 200) {
        console.log(123)
        this.setState({
          detailInfo: res.data
        })
      }
    })
  }
  componentDidMount(){
    this.getInfoData()
  }
}
export default Info