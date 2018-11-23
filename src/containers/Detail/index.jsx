import React,{Component} from 'react'
import Header from '../../components/Header/index'
import Info from './subpage/info'
import Comment from './subpage/Comment'
class Detail extends Component {
  render(){
    return (
      <div>
        <Header title="商户详情" handleBack={this.handleBack.bind(this)}/>
        <Info id={this.props.match.params.id}/>
        <Comment id={this.props.match.params.id}/>
      </div>
    )
  }
  componentDidMount(){
    
  }
  handleBack(){
    this.props.history.goBack()
  }
}
export default Detail