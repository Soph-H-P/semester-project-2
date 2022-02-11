import React from 'react';

import PageWrapper from '../components/atoms/PageWrpper';
import SignIn from '../components/molecules/SignIn';

const Login = ({ setSignedIn, signedIn, setUserRole }) => {
  return (
    <PageWrapper>
      <SignIn setSignedIn={setSignedIn} signedIn={signedIn} setUserRole={setUserRole} />
    </PageWrapper>
  );
};

export default Login;
