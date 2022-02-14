import React, { useState } from 'react';

import createProduct from '../../utils/createProduct';

import Title from '../atoms/Title';
import TextInput from '../atoms/TextInput';
import NumberInput from '../atoms/NumberInput';
import TextAreaInput from '../atoms/TextAreaInput';
import ToggleCheckBox from '../atoms/ToggleCheckBox';
import StyledFormContainer, { ErrorMessage } from '../atoms/StyledFormContainer';

const EditProduct = ({ title, signedIn, userRole }) => {
  const [isError, setIsError] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const price = e.target.price.value;
    const featured = e.target.featured.checked;
    const description = e.target.description.value;
    const image = e.target.image.value;

    createProduct(title, price, featured, description, image, setIsError, setIsNetworkError);
  };


  return (
    <StyledFormContainer width={650} align={'left'}>
      <Title>{userRole === 'Authenticated' ? title : 'Sorry you are not authorized to create or edit products. If you have an admin account, please log in : )'}</Title>
      {userRole === 'Authenticated' && (
        <form onSubmit={handleSubmit}>
          <TextInput label="Product Title" name="title" required={true}></TextInput>
          <NumberInput label="Price" inputName="price" required={true} isPrice={true}></NumberInput>
          <ToggleCheckBox label="Featured" name="featured"></ToggleCheckBox>
          <TextAreaInput
            label="Product Description"
            name="description"
            required={true}
          ></TextAreaInput>
          <TextInput label="Image URL" name="image" required={true} type={'url'}></TextInput>
          {isError && <ErrorMessage>Invalid data please fill out all fields</ErrorMessage>}
          {isNetworkError && (
            <ErrorMessage>
              There seems to be some trouble on our end please try again later.
            </ErrorMessage>
          )}
          <input type={'submit'} value="Create" />
        </form>
      )}
    </StyledFormContainer>
  );
};

export default EditProduct;
