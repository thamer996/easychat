import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Signin from './components/Signin';
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './components/styles.css';



const Root = () => (

  <Router>

    <Switch>
      <Route path="/signin" component={Signin} />
      <Route path="/main" component={Main} />

    </Switch>

  </Router>
);



ReactDOM.render(
  <React.StrictMode>

    <Root />

  </React.StrictMode>,
  document.getElementById('root')
);


