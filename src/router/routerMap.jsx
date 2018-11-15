import React, {Component} from 'react'
import {HashRouter as Router} from 'react-router-dom'
import App from '../containers/index'
class RouterMap extends Component {
  render(){
    return (
      <Router>
        <App/>
      </Router>
    )
  }
}

export default RouterMap
