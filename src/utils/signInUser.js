import { baseUrl } from '../settings/api';
import { saveToken, saveUser } from './storage';

const signInUser = async (userName, password, reRouteUser, setSignedIn, setIsError, setIsNetworkError) => {
  const url = `${baseUrl}/auth/local`;

  const data = JSON.stringify({ identifier: userName, password: password });
  const options = {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.user) {
      saveToken(result.jwt);
      saveUser(result.user);
      setSignedIn(true)
      setIsError(false)
      reRouteUser();
    }

    if (result.error) {
      setIsError(true)
    }

  } catch (error) {
    setIsNetworkError(true)
    console.log(error);
  }
};

export default signInUser;
