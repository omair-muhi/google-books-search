import React from "react";
// import logo from "./logo.svg";
import Header from './components/Header';
import Search from './pages/Search';
import Saved from './pages/Saved';

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/saved">
          <Saved />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
