import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  width: 100px;
  cursor: pointer;
  position: relative;

  input {
    border: 1px solid ${(props) => props.theme.black};
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

const NumberInput = ({ label, inputName, required, onChange, defaultValue = 0 }) => {
  return (
    <StyledLabel htmlFor={inputName}>
      {label}
      <input
        onChange={onChange}
        name={inputName}
        id={inputName}
        required={required ? 'required' : ''}
        type="number"
        defaultValue={defaultValue}
        step=".01"
      />
      <InputUnderline className="underline" />
    </StyledLabel>
  );
};

export default NumberInput;
