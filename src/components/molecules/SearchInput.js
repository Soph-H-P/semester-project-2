import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import searchSvg from '../../assets/icons/searchSvg.svg';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';
import { useNavigate } from 'react-router-dom';

const SearchInputWrapper = styled.form`
  display: flex;
  align-items: center;
  width: max-content;
  grid-area: search;

  label {
    color: ${(props) => props.theme.white};
    width: 200px;
  }

  input {
    display: block;
  }

  ${(props) =>
    !props.expanded &&
    css`
      input {
        display: none;
      }

      label {
        width: 0px;
      }

      .underline {
        display: none;
      }
    `}
`;

const SearchInput = ({ closeMenu }) => {
  const [expandSearch, setExpandSearch] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const reRouteUser = (searchTerm) => {
    navigate(`/search-results?search=${searchTerm}`);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current[1].focus();
    }
  }, [expandSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.trim();
    reRouteUser(searchTerm);
    closeMenu();
    e.target.search.value = '';
    setExpandSearch(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setExpandSearch(!expandSearch);
  };

  return (
    <>
      <SearchInputWrapper ref={ref} onSubmit={handleSubmit} expanded={expandSearch}>
        <Button handleClick={handleClick} icon={true} type="button">
          <Icon iconSource={searchSvg} alt="search" />
        </Button>
        <TextInput label="search" name="search"></TextInput>
      </SearchInputWrapper>
    </>
  );
};

export default SearchInput;
