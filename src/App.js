import React from "react";
import "./index.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import SingleProduct from "./component/SingleProduct";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/product/:id" component={SingleProduct} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
