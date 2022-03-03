import React, { useEffect, useState } from 'react';
import MetaData from '../components/atoms/MetaData';
import PageWrapper from '../components/atoms/PageWrpper';
import Title from '../components/atoms/Title';
import ProductsGrid from '../components/organisms/ProductsGrid';
import fetchLocalProducts from '../utils/fetchLocalProducts';
import Button from '../components/atoms/Button';
import { favouritesKey } from '../settings/settings';
import { saveToStorage, getFromStorage } from '../utils/storage';
import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  text-align: center;

  button {
    width: max-content;
  }
`;

const Favourites = ({ userRole, itemsInFavourites, setItemsInFavourites }) => {
  const [currentFavourites, setCurrentFavourites] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchLocalProducts(setCurrentFavourites, itemsInFavourites, setIsError);
  }, [itemsInFavourites]);

  const handleClearFavourites = () => {
    if (window.confirm(`Are you sure you want to remove all your favourites?`)) {
      saveToStorage(favouritesKey, []);
      setItemsInFavourites(getFromStorage(favouritesKey));
    }
  };

  return (
    <PageWrapper>
      <MetaData
        title={`Favourites (${currentFavourites.length} items)`}
        description="Have a look at all the items you thought were great."
      ></MetaData>
      {currentFavourites.length === 0 && <Title>Currently no favourited items</Title>}
      {currentFavourites.length >= 1 && (
        <>
          {!isError && (
            <Title>
              Your Favourites ({currentFavourites.length}
              {itemsInFavourites.length >= 2 ? ' items' : ' item'})
            </Title>
          )}
          <ProductsGrid
            userRole={userRole}
            productsToRender={currentFavourites}
            setItemsInFavourites={setItemsInFavourites}
            isError={isError}
          ></ProductsGrid>
        </>
      )}
      {currentFavourites.length !== 0 && (
        <StyledButtonContainer>
          <Button handleClick={handleClearFavourites} type="secondary">
            Clear all favourites
          </Button>
        </StyledButtonContainer>
      )}
    </PageWrapper>
  );
};

export default Favourites;
