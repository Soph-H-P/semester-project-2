import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from './components/atoms/Footer';
import Navigation from './components/organisms/Navagation';
import Bag from './pages/Bag';
import ContentEditor from './pages/ContentEditor';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Products from './pages/Products';
import { bagItemsKey, favouritesKey } from './settings/settings';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { getFromStorage, getUsername, getUserRole } from './utils/storage';

const App = () => {
  const [signedIn, setSignedIn] = useState(getUsername());
  const [userRole, setUserRole] = useState(getUserRole());
  const [itemsInBag, setItemsInBag] = useState(getFromStorage(bagItemsKey));
  const [itemsInFavourites, setItemsInFavourites] = useState(getFromStorage(favouritesKey));

  useEffect(() => {
    setItemsInBag(getFromStorage(bagItemsKey));
    setItemsInFavourites(getFromStorage(favouritesKey));
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <GlobalStyle />
          <Navigation userRole={userRole} signedIn={signedIn} itemsInBag={itemsInBag} />
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
                  setItemsInFavourites={setItemsInFavourites}
                />
              }
            ></Route>
            <Route
              path="/products"
              element={<Products userRole={userRole} setItemsInFavourites={setItemsInFavourites} />}
            ></Route>
            <Route
              path="/product"
              element={
                <Product
                  userRole={userRole}
                  setItemsInBag={setItemsInBag}
                  setItemsInFavourites={setItemsInFavourites}
                />
              }
            ></Route>
            <Route
              path="/login"
              element={
                <Login setSignedIn={setSignedIn} signedIn={signedIn} setUserRole={setUserRole} />
              }
            ></Route>
            <Route
              path="/favourites"
              element={
                <Favourites
                  userRole={userRole}
                  itemsInFavourites={itemsInFavourites}
                  setItemsInFavourites={setItemsInFavourites}
                />
              }
            ></Route>
            <Route
              path="/your-bag"
              element={
                <Bag
                  userRole={userRole}
                  itemsInBag={itemsInBag}
                  setItemsInFavourites={setItemsInFavourites}
                  setItemsInBag={setItemsInBag}
                />
              }
            ></Route>
            <Route path="/content-editor" element={<ContentEditor />}></Route>
          </Routes>
        </div>
        <Footer>&copy; Tracks 2022 </Footer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
