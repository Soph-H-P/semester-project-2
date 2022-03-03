import React, { useEffect, useState } from 'react';
import MetaData from '../components/atoms/MetaData';
import PageWrapper from '../components/atoms/PageWrpper';
import HeroSection from '../components/atoms/HeroSection';
import SignIn from '../components/molecules/SignIn';

const Login = ({ setSignedIn, signedIn, setUserRole }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => window.removeEventListener('resize', handleResizeWindow);
  }, []);
  return (
    <PageWrapper>
      <MetaData
        title={signedIn ? 'Sign out' : 'Sign in'}
        description="Please log in to access your account and view your previous orders. As an admin you will have access to the content editor when you have logged in."
      ></MetaData>
      {windowWidth < '600' && (
        <SignIn setSignedIn={setSignedIn} signedIn={signedIn} setUserRole={setUserRole} />
      )}
      {windowWidth >= '600' && (
        <HeroSection>
          <SignIn setSignedIn={setSignedIn} signedIn={signedIn} setUserRole={setUserRole} />
        </HeroSection>
      )}
    </PageWrapper>
  );
};

export default Login;
