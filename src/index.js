import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/login';
import Container from './pages/container';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'
import { Route } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Route path='/' component={Login}/> 
    <Route path='/login' component={Container}/>
  </HashRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
