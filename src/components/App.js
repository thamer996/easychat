import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/Auth";

import Main from "./Main";
import Signin from "./Signin";
import Profile from "./Profile";


function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/main" component={Main} />
            <Route exact path="/" component={Signin} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
