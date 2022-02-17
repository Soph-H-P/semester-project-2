import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import createProduct from '../../utils/createProduct';
import fetchCurrentProduct from '../../utils/fetchCurrentProduct';
import updateProduct from '../../utils/updateProduct';
import NumberInput from '../atoms/NumberInput';
import StyledFormContainer, { ErrorMessage } from '../atoms/StyledFormContainer';
import TextAreaInput from '../atoms/TextAreaInput';
import TextInput from '../atoms/TextInput';
import Title from '../atoms/Title';
import ToggleCheckBox from '../atoms/ToggleCheckBox';

const EditProduct = ({ userRole }) => {
  const [isError, setIsError] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get('id');
  const pageTitle = id ? 'Edit Product' : 'Create New Product';

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const price = e.target.price.value;
    const featured = e.target.featured.checked;
    const description = e.target.description.value;
    const image = e.target.image.value;

    if (id === null) {
      createProduct(
        title,
        price,
        featured,
        description,
        image,
        setIsError,
        setIsNetworkError,
        setIsSuccess
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

  const handleDeleteProduct = (id) => {

  }

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
      {userRole === 'Authenticated' && (
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Product Title"
            name="title"
            required={true}
            defaultValue={currentProduct && currentProduct.title}
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
            defaultValue={currentProduct && currentProduct.description}
          ></TextAreaInput>
          <TextInput
            label="Image URL"
            name="image"
            type={'url'}
            defaultValue={currentProduct && currentProduct.image_url}
          ></TextInput>
          {isError && <ErrorMessage>Invalid data please fill out all fields</ErrorMessage>}
          {isNetworkError && (
            <ErrorMessage>
              There seems to be some trouble on our end please try again later.
            </ErrorMessage>
          )}
          <input type={'submit'} value={id ? 'Update' : 'Create'} />
          {isSuccess && <Link to={`/product?id=${isSuccess}`}>View created item</Link>}
        </form>
      )}
    </StyledFormContainer>
  );
};

export default EditProduct;
