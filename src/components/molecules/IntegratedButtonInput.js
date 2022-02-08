import React from 'react';
import styled from 'styled-components';

import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';

const IntegratedButtonInputWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  button {
    margin: 0px 0px 7px -10px;
    padding-bottom: 9px;
  }
`;

const IntegratedButtonInput = ({ buttonText, inputLabel, inputName }) => {
  console.log(buttonText);
  return (
    <IntegratedButtonInputWrapper>
      <TextInput label={inputLabel} name={inputName}></TextInput>
      <Button handleClick={() => console.log('clicked')} type="primary">
        {buttonText}
      </Button>
    </IntegratedButtonInputWrapper>
  );
};

export default IntegratedButtonInput;
