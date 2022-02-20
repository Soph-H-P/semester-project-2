import React from 'react';
import styled from 'styled-components';

const ToggleLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  width: max-content;
  position: relative;
  cursor: pointer;
  margin: 10px;

  #toggle-switch {
    opacity: 0;
    z-index: 1;
    position: absolute;
    left: -2px;
    bottom: -1px;
    height: 46px;
    width: 96px;
    cursor: pointer;
  }

  #toggle-switch:checked ~ .toggle::after {
    left: 52px;
  }

  #toggle-switch:checked ~ .toggle {
    background: ${(props) => props.theme.secondaryColor};
  }

  #toggle-switch:focus ~ .toggle {
    border: blue 2px solid;
  }
`;

const ToggleContainer = styled.div`
  background: ${(props) => props.theme.darkerBackgroundColor};
  transition: background ease 0.6s;
  height: 50px;
  width: 100px;
  border: solid 2px ${(props) => props.theme.black};

  &::after {
    content: '';
    height: 46px;
    width: 46px;
    background: ${(props) => props.theme.white};
    position: absolute;
    bottom: 2px;
    left: 2px;
    transition: left ease 0.6s;
  }

  #toggle-switch {
    height: 40px;
  }
`;

const ToggleCheckBox = ({ label, name, checked }) => {
  return (
    <ToggleLabel htmlFor={name}>
      {label}
      <input
        type="checkbox"
        name={name}
        id="toggle-switch"
        value="featured"
        defaultChecked={checked}
      />
      <ToggleContainer className="toggle" />
    </ToggleLabel>
  );
};

export default ToggleCheckBox;
