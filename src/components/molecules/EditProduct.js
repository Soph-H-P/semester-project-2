import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import createProduct from '../../utils/createProduct';
import deleteProduct from '../../utils/deleteProduct';
import fetchCurrentProduct from '../../utils/fetchCurrentProduct';
import updateProduct from '../../utils/updateProduct';
import Button from '../atoms/Button';
import NumberInput from '../atoms/NumberInput';
import StyledFormContainer from '../atoms/StyledFormContainer';
import ErrorMessage from '../atoms/ErrorMessage';
import StyledLink from '../atoms/StyledLink';
import TextAreaInput from '../atoms/TextAreaInput';
import TextInput from '../atoms/TextInput';
import Title from '../atoms/Title';
import ToggleCheckBox from '../atoms/ToggleCheckBox';

const EditProduct = ({ userRole }) => {
  const [isError, setIsError] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get('id');
  const pageTitle = id ? 'Edit Product' : 'Create New Product';

  const navigate = useNavigate();
  const reRouteUser = () => {
    navigate(`/products`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim();
    const price = e.target.price.value.trim();
    const featured = e.target.featured.checked;
    const description = e.target.description.value.trim();
    const image = e.target.image.value.trim();

    if (id === null) {
      createProduct(
        title,
        price,
        featured,
        description,
        image,
        setIsError,
        setIsNetworkError,
        setIsSuccess,
        navigate
      );
    } else {
      updateProduct(
        title,
        price,
        featured,
        description,
        image,
        setIsError,
        setIsNetworkError,
        setIsSuccess,
        id
      );
    }
  };

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete ${currentProduct.title}?`)) {
      deleteProduct(reRouteUser, id, setIsDeleted);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCurrentProduct(id, setCurrentProduct);
    }
  }, [id]);

  return (
    <StyledFormContainer width={650} align={'left'}>
      <Title>
        {userRole === 'Authenticated'
          ? pageTitle
          : 'Sorry you are not authorized to create or edit products. If you have an admin account, please log in : )'}
      </Title>
      {id && (
        <StyledLink to="/content-editor" onClick={() => setCurrentProduct(null)}>
          + or create a new product
        </StyledLink>
      )}
      {userRole === 'Authenticated' && (
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Product Title"
            name="title"
            required={true}
            defaultValue={(currentProduct && currentProduct.title) || ''}
          ></TextInput>
          <NumberInput
            label="Price"
            inputName="price"
            required={true}
            isPrice={true}
            defaultValue={currentProduct && currentProduct.price}
          ></NumberInput>
          <ToggleCheckBox
            label="Featured"
            name="featured"
            checked={currentProduct && currentProduct.featured}
          ></ToggleCheckBox>
          <TextAreaInput
            label="Product Description"
            name="description"
            required={true}
            defaultValue={(currentProduct && currentProduct.description) || ''}
          ></TextAreaInput>
          <TextInput
            label="Image URL"
            name="image"
            type={'url'}
            defaultValue={(currentProduct && currentProduct.image_url) || ''}
          ></TextInput>
          {isError && <ErrorMessage>Invalid data please fill out all fields</ErrorMessage>}
          {isNetworkError && (
            <ErrorMessage>
              There seems to be some trouble on our end please try again later. Sorry for any
              inconvenience
            </ErrorMessage>
          )}
          {isDeleted && <ErrorMessage>Successfully Deleted</ErrorMessage>}
          <div>
            {!isDeleted && isSuccess && id && (
              <StyledLink to={`/product?id=${isSuccess}`}>Product saved! View item</StyledLink>
            )}
            <input type={'submit'} value={id ? 'Update' : 'Create'} />
            {id && (
              <Button type="secondary" handleClick={handleDeleteProduct}>
                Delete
              </Button>
            )}
          </div>
        </form>
      )}
    </StyledFormContainer>
  );
};

export default EditProduct;
