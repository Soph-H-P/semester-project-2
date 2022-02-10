import React from 'react';

import SignIn from '../components/molecules/SignIn';

const Login = ({ setSignedIn, signedIn, setUserRole }) => {

  return <SignIn setSignedIn={setSignedIn} signedIn={signedIn} setUserRole={setUserRole} />;
};

export default Login;
