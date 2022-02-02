import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import Navigation from './components/organisms/Navagation';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <GlobalStyle />
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Products">Products</NavLink>
          <NavLink to="/Login">Login</NavLink>
        </Navigation>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </div>
      {/* <Footer></Footer> */}
    </Router>
  );
};

export default App;
