import React from 'react';
import styled from 'styled-components';

import searchSvg from '../../assets/icons/searchSvg.svg';
import Icon from '../atoms/Icon';
import TextInput from '../atoms/TextInput';

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
`;

const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <Icon iconSource={searchSvg} alt="search" />
      <TextInput label="Search" name="search-input"></TextInput>
    </SearchInputWrapper>
  );
};

export default SearchInput;
