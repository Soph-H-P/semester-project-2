import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  width: 100px;
  cursor: pointer;
  margin: 10px;
  position: relative;

  input {
    border: 1px solid ${(props) => props.theme.black};
    padding: 0.5rem;
    font-family: ${(props) => props.theme.paragraphFont};
    font-weight: 300;
    font-size: 1rem;
  }

  #number-input:focus ~ .underline::after {
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

const NumberInput = ({ label, name, required }) => {
  return (
    <StyledLabel htmlFor={name}>
      {label}
      <input
        name={name}
        id="number-input"
        required={required ? 'required' : ''}
        type="number"
        min="1"
        max="10"
        defaultValue="1"
      />
      <InputUnderline className="underline" />
    </StyledLabel>
  );
};

export default NumberInput;
