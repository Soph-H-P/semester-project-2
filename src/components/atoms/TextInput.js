import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  max-width: 450px;
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;

  input {
    border: none;
    background: ${(props) => props.theme.lightBackgroundColor};
    padding: 0.5rem;
    font-family: ${(props) => props.theme.paragraphFont};
    font-weight: 300;
    font-size: 1rem;
  }

  input:focus ~ .underline::after {
    background: ${(props) => props.theme.secondaryColor};
    width: 100%;
  }
`;

const InputUnderline = styled.div`
  &::after {
    content: '';
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: -3px;
    background: ${(props) => props.theme.black};
    transition: background ease 0.6s;
  }
`;

const TextInput = ({ label, name, required, type = 'text' }) => {
  return (
    <StyledLabel htmlFor={name}>
      {label}
      <input name={name} id={name} required={required ? 'required' : ''} type={type}/>
      <InputUnderline className="underline" />
    </StyledLabel>
  );
};

export default TextInput;
