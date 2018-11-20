import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home/index'
import City from './City/index'
import Detail from './Detail/index'
import Search from './Search/index'
import User from './User/index'
import NotFound from './NotFound/index'
class RouterIndex extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/city" component={City}/>
        <Route path='/search/:category/:key' component={Search}/>
        <Route path='/user' component={User}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}
export default RouterIndex