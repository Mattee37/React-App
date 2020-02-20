import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./style/App.css";

import Navigation from "./components/Navigation";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route exact path="/" component={Main} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
