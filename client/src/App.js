import React from "react";
import MainContent from "./component/MainContent";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page2">page2</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/:stockNo/detail">
            <div>page2</div>
          </Route>
          <Route path="/">
            <MainContent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
