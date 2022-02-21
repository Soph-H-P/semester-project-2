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
    width: 240px;
    transition: width 1s ease;
  }

  input {
    width: 240px;
    padding-left: 36px;
    transition: width 1s ease;
  }

  ${(props) =>
    props.expanded &&
    css` button {
    margin-right: -48px;
    z-index: 1;
  `}
  }

  ${(props) =>
    !props.expanded &&
    css`
      input {
        padding: 0px;
        width: 0px;
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
    if (ref.current && expandSearch) {
      ref.current[1].focus();
    }
    if (ref.current && !expandSearch) {
      ref.current[1].blur();
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
          <Icon iconSource={searchSvg} alt="search" productId="search-icon" />
        </Button>
        <TextInput label="search" name="search"></TextInput>
      </SearchInputWrapper>
    </>
  );
};

export default SearchInput;
