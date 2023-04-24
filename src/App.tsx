import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { ProductListing } from './components/product-listing/ProductListing';
import { ProductDetails } from './components/product-details/ProductDetails';
import { CartComponent } from './components/cart/CartComponent';
import { ProductCategories } from './components/product-categories/ProductCategories';

function App() {
  return (
    <div className="container-fluid p-0">
      <Router>
        <Header />
        <div className='main-cointainer bg-red'>
          <Routes>
            <Route path='/' element={<ProductListing />}></Route>
            <Route path='/product/:productId' element={<ProductDetails />}></Route>
            <Route path='/cartItems' element={<CartComponent />}></Route>
            <Route path='/categories' element={<ProductCategories />}></Route>
            <Route path='/categories/:category' element={<ProductListing />}></Route>
            <Route>404 Not Found!</Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
