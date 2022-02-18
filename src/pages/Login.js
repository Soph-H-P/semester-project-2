import React from 'react';
import MetaData from '../components/atoms/MetaData';
import PageWrapper from '../components/atoms/PageWrpper';
import SignIn from '../components/molecules/SignIn';

const Login = ({ setSignedIn, signedIn, setUserRole }) => {
  return (
    <PageWrapper>
      <MetaData
        title={signedIn ? 'Sign out' : 'Sign in'}
        description="Please log in to access your account and view your previous orders. As an admin you will have access to the content editor when you have logged in."
      ></MetaData>
      <SignIn setSignedIn={setSignedIn} signedIn={signedIn} setUserRole={setUserRole} />
    </PageWrapper>
  );
};

export default Login;
