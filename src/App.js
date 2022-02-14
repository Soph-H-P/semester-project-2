import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { getUserRole, getUsername } from './utils/storage';

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
  const [signedIn, setSignedIn] = useState(getUsername());

  const [userRole, setUserRole] = useState(getUserRole());

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <GlobalStyle />
          <Navigation userRole={userRole} signedIn={signedIn} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  setSignedIn={setSignedIn}
                  signedIn={signedIn}
                  setUserRole={setUserRole}
                  userRole={userRole}
                />
              }
            ></Route>
            <Route path="/products" element={<Products userRole={userRole} />}></Route>
            <Route path="/product" element={<Product userRole={userRole} />}></Route>
            <Route
              path="/login"
              element={
                <Login setSignedIn={setSignedIn} signedIn={signedIn} setUserRole={setUserRole} />
              }
            ></Route>
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
