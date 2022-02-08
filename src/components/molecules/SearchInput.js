import React from 'react';
import styled from 'styled-components';

import TextInput from '../atoms/TextInput';
import Icon from '../atoms/Icon';
import searchSvg from '../../assets/icons/searchSvg.svg';

const SearchInputWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    width: max-content;
`

const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <Icon iconSource={searchSvg} alt="search" />
      <TextInput label="Search" name="search-input"></TextInput>
    </SearchInputWrapper>
  );
};

export default SearchInput;
