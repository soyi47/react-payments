import React from 'react';
import styled from 'styled-components';

import Input from './common/Input.jsx';
import InputField from './common/InputField.jsx';

import { CARD_INFO_RULES } from '../constants';

const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInputCounter = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  line-height: 14px;
  color: ${props => (props.isComplete ? '#04c09e' : '#525252')};
  letter-spacing: -0.085em;
`;

function InputCounter({ currLength = '0', maxLength, isComplete }) {
  return (
    <StyledInputCounter isComplete={isComplete}>
      {currLength}/{maxLength}
    </StyledInputCounter>
  );
}

export default function CardHolderNameInput({ holderName, onChange }) {
  return (
    <InputFieldWrapper>
      <InputField
        labelText="카드 소유자 이름 (선택)"
        wrapperWidth="100%"
        horizontalAlign="flex-start"
        isComplete={holderName !== ''}>
        <Input
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          type="text"
          value={holderName}
          onChange={e => onChange(e.target.value.toUpperCase())}
          width="100%"
          textAlign="left"
          isComplete={holderName !== ''}
        />
      </InputField>
      <InputCounter
        currLength={holderName.length}
        maxLength={CARD_INFO_RULES.HOLDER_NAME_MAX_LENGTH}
        isComplete={holderName !== ''}
      />
    </InputFieldWrapper>
  );
}
