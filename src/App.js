import React from 'react';
import {Router, Route, BrowserRouter} from 'react-router';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Navbar />
      <Router>
        <Route path="/"  component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Router>
    </Router>
    </BrowserRouter>
  );
}

export default App;
