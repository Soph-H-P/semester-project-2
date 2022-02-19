import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbContainer = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: baseline;

  a {
    margin-right: 20px;
    text-decoration: underline;
  }

  a::after {
    content: '/';
    margin-left: 20px;
    text-decoration: underline white;
  }
`;

const Breadcrumbs = ({ product }) => {
  return (
    <BreadcrumbContainer>
      <Link to="/">Home</Link>
      <Link to="/products">All Sneakers</Link>
      <p>{product}</p>
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;
