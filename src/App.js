
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import ProductList from './Components/Productlist/pl';
import ProductDetail from './Components/Productdetail/pd';
import Cart from './Components/Cart/cart';
import Login from './Components/Login/login';
import NotFound from './Components/Notfound/nf';

const AppRouter = () => (
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={ProductList} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
  </Router>
);

export default AppRouter;
