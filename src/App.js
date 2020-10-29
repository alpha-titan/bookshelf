import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import BookCrud from "./pages/BookCrud";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/bookcrud" component={BookCrud} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
