const tokenKey = 'token';
const userKey = 'user';

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key) => {
  const value = localStorage.getItem(key);
  const returnedValue = !value ? [] : JSON.parse(value);
  return returnedValue;
};

export const saveToken = (tokenToSave) => {
  saveToStorage(tokenKey, tokenToSave);
};

export const getToken = () => getFromStorage(tokenKey);

export const logoutUser = () => {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
};

export const saveUser = (user) => {
  saveToStorage(userKey, user);
};

export const getUsername = () => {
  const user = getFromStorage(userKey);
  const username = user ? user.username : null;
  return username;
};

export const getUserRole = () => {
  const user = getFromStorage(userKey);
  const userRole = user.role ? user.role.name : null;
  return userRole;
};

export const findInList = (listToFilter, id) => {
  const foundInList = listToFilter.find((favourite) => parseInt(favourite.id) === id);
  return foundInList;
};

export const filterList = (listToFilter, id) => {
  const filteredList = listToFilter.filter((favourite) => parseInt(favourite.id) !== id);
  return filteredList;
};
