import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ButtonCounter from "./ButtonCounter";
import Component1 from "./Component1";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/simple">Simple Counter</Link>
          </li>
          <li>
            <Link to="/context">Use Context</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/simple">
          <ButtonCounter />
        </Route>
        <Route path="/context">
          <Component1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
