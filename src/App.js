import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import Navigation from './components/organisms/Navagation';
import Footer from './components/atoms/Footer';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
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
        <Footer>&copy;  Tracks 2022 </Footer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
