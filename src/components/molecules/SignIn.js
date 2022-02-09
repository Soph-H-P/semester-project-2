import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { clearStorage, getUsername } from '../../utils/storage';
import signInUser from '../../utils/signInUser';

import Button from '../atoms/Button';
import Title from '../atoms/Title';
import TextInput from '../atoms/TextInput';
import StyledFormContainer, { ErrorMessage } from '../atoms/StyledFormContainer';

const SignIn = () => {
  const userName = getUsername();
  const navigate = useNavigate();

  const [signedIn, setSignedIn] = useState(getUsername());
  const [isError, setIsError] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);

  const reRouteUser = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);
    setIsNetworkError(false);
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password, reRouteUser, setSignedIn, setIsError, setIsNetworkError);
    setSignedIn(getUsername());
  };

  const handleSignOut = () => {
    if (window.confirm(`Hi ${userName}! Are you sure you want to log out?`)) {
      clearStorage();
      setSignedIn(getUsername());
    }
  };

  return (
    <StyledFormContainer>
      {signedIn && (
        <>
          <Title>Hi {userName}</Title>
          <Button handleClick={handleSignOut}>Sign Out</Button>
        </>
      )}
      {!signedIn && (
        <form onSubmit={handleSubmit}>
          <Title>Sign In</Title>
          <TextInput label="Email" name="email" required={true} type="email" />
          <TextInput label="Password" name="password" required={true} type="password" />
          <input type={'submit'} value="Sign In" />
          {isError && <ErrorMessage>Incorrect username or password</ErrorMessage>}
          {isNetworkError && (
            <ErrorMessage>
              There seems to be some trouble on our end please try again later.
            </ErrorMessage>
          )}
        </form>
      )}
    </StyledFormContainer>
  );
};

export default SignIn;
