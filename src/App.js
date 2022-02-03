import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import Navigation from './components/organisms/Navagation';
import Footer from './components/atoms/Footer';
import StyledNavLink from './components/atoms/StyledNavLink';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <GlobalStyle />
          <Navigation>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/Products">Sneakers</StyledNavLink>
            <StyledNavLink to="/Products">Brands</StyledNavLink>
          </Navigation>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/product" element={<Product />}></Route>
          </Routes>
        </div>
        <Footer>&copy; Tracks 2022 </Footer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
