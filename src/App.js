import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Browse from "./pages/browse";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Route exact path="/browse">
        <Browse />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path={ROUTES.HOME}></Route>
      <Home />
    </Router>
  );
}

export default App;
