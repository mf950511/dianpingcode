import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as storeActions from '../../../actions/store'
import BuyAndStore from '../../../components/BuyAndStore/index'
import PropTypes from 'prop-types'
class Buy extends Component {
  constructor(props){
    super(props)
    this.state = {
      isStore: false
    }
  }
  // static contextTypes = {
  //   router: PropTypes.object.isRequired
  // }
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  render(){
    return (
      <div>
        <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
      </div>
    )
  }
  // 购买
  buyHandle(){
    const loginFlag = this.loginCheck()
    if(!loginFlag) {
      return
    }


    this.context.router.history.push('/user')
  }
  // 收藏
  storeHandle(){
    const loginFlag = this.loginCheck()
    if(!loginFlag) {
      return
    }
    const id = this.props.id
    const storeActions = this.props.storeAction
    if(this.state.isStore) {
      storeActions.remove({id: id})
    } else {
      storeActions.add({id: id})
    }

    this.setState({
      isStore: !this.state.isStore
    })
  }
  checkStoreState(){
    const id = this.props.id
    const store = this.props.store
    store.some(item => {
      if(item.id === id) {
        this.setState({
          isStore: true
        })
        // 跳出循环
        return true
      }
    })
  }
  // 登陆验证
  loginCheck(){
    const id = this.props.id
    const userInfo = this.props.userInfo
    if(!userInfo.username) {
      this.context.router.history.push({pathname: '/login',query:{router: '/detail/' + id}})
      return false
    }
    return true
  }
  componentDidMount(){
    this.checkStoreState()
  }
}

function mapStateToProps(state){
  return {
    userInfo: state.userInfo,
    store: state.store
  }
}

function mapDispatchToProps(dispatch){
  return {
    storeAction: bindActionCreators(storeActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy)