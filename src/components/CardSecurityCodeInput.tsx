import React from 'react';
import styled from 'styled-components';

import Input from './common/Input';
import InputField from './common/InputField';
import DescriptionIconButton from './common/DescriptionIconButton';

import { ADD_CARD_FORM_ERROR_MESSAGE, CREATE_MASKED_CHARACTERS } from '../constants/index';

import QuestionMarkIcon from '../assets/images/questionMarkIcon.svg';

const SECURITY_CODE_DESCRIPTION = 'CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다.';

const InputFieldWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const IconButtonWrapper = styled.div`
  position: relative;
  top: 10px;
  right: 60%;
`;

interface Props {
  securityCode: string;
  onChange: (value?: string, index?: number) => void;
  isInvalid: boolean;
  isComplete: boolean;
}

export default function CardSecurityCodeInput({ securityCode, onChange, isInvalid, isComplete }: Props) {
  return (
    <InputFieldWrapper>
      <InputField
        labelText="보안 코드(CVC/CVV)"
        wrapperWidth="85px"
        isComplete={isComplete}
        isError={isInvalid}
        errorMessage={ADD_CARD_FORM_ERROR_MESSAGE.SECURITY_CODE}>
        <Input
          type="password"
          placeholder={CREATE_MASKED_CHARACTERS(3)}
          value={securityCode}
          maxLength={3}
          onChange={e => onChange(e.target.value)}
          width="100%"
          data-testid={'card-security-code-input'}
        />
      </InputField>
      <IconButtonWrapper>
        <DescriptionIconButton iconImage={QuestionMarkIcon} description={SECURITY_CODE_DESCRIPTION} />
      </IconButtonWrapper>
    </InputFieldWrapper>
  );
}
