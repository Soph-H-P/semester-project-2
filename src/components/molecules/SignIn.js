import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import signInUser from '../../utils/signInUser';
import { getUsername, getUserRole, logoutUser } from '../../utils/storage';
import Button from '../atoms/Button';
import StyledFormContainer from '../atoms/StyledFormContainer';
import ErrorMessage from '../atoms/ErrorMessage';
import TextInput from '../atoms/TextInput';
import Title from '../atoms/Title';

const SignIn = ({ setSignedIn, signedIn, setUserRole }) => {
  const navigate = useNavigate();

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
    signInUser(
      email,
      password,
      reRouteUser,
      setSignedIn,
      setUserRole,
      setIsError,
      setIsNetworkError
    );
    setSignedIn(getUsername());
    setUserRole(getUserRole());
    setTimeout(() => {
        reRouteUser();
    }, 1500);
  };

  const handleSignOut = () => {
    if (window.confirm(`Hi ${signedIn}! Are you sure you want to log out?`)) {
      logoutUser();
      setSignedIn(getUsername());
      setUserRole(getUserRole());
    }
  };

  return (
    <StyledFormContainer>
      {signedIn && (
        <>
          <Title>Hi {signedIn} you're logged in</Title>
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
