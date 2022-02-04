import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import Login from './pages/Login';
import Bag from './pages/Bag';
import ContentEditor from './pages/ContentEditor';
import Favourites from './pages/Favourites';
import Navigation from './components/organisms/Navagation';
import Footer from './components/atoms/Footer';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <GlobalStyle />
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/favourites" element={<Favourites />}></Route>
            <Route path="/your-bag" element={<Bag />}></Route>
            <Route path="/content-editor" element={<ContentEditor />}></Route>
          </Routes>
        </div>
        <Footer>&copy; Tracks 2022 </Footer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
