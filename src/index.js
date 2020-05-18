import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login';
import Container from './pages/container';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'
import { Route } from "react-router-dom";
import 'antd/dist/antd.css';
ReactDOM.render(
  <HashRouter>
    <Route path='/' component={Login}/>
    <Route path='/index' component={Container}/> 
  </HashRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
