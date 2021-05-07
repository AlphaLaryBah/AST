import React from "react";

import NavHeader from "./navigationfiles/NavHeader";
import NavFooter from "./navigationfiles/NavFooter";
import Home from "./Home";
import Personal from "./Personal";
import Stocks from "./Stocks";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class MainNavs extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div>
            <NavHeader />
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/Personal" component={Personal} />
              <Route path="/Stocks" component={Stocks} />
              <Redirect to="/home" />
            </Switch>
            <NavFooter />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
export default MainNavs;