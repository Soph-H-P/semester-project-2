import React from 'react';
import styled from 'styled-components';

import searchSvg from '../../assets/icons/searchSvg.svg';
import Icon from '../atoms/Icon';
import TextInput from '../atoms/TextInput';
import { useNavigate } from 'react-router-dom';

const SearchInputWrapper = styled.form`
  display: flex;
  align-items: center;
  width: max-content;
`;

const SearchInput = ({ closeMenu }) => {
  const navigate = useNavigate();
  const reRouteUser = (searchTerm) => {
    navigate(`/search-results?search=${searchTerm}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    reRouteUser(searchTerm);
    closeMenu();
    e.target.search.value = '';
  };

  return (
    <SearchInputWrapper onSubmit={handleSubmit}>
      <Icon iconSource={searchSvg} alt="search" />
      <TextInput label="Search" name="search"></TextInput>
    </SearchInputWrapper>
  );
};

export default SearchInput;
