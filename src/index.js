import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './static/css/font.css'
import './static/css/common.less'
// import App from './containers/index/App';
// import Mall from './containers/index/index'
import RouterMap from './router/routerMap'
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore'
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <RouterMap />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
