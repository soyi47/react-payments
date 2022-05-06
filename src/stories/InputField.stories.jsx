import React from 'react';
import Input from '../components/common/Input';
import InputField from '../components/common/InputField';

export default {
  title: 'InputField',
  component: InputField,
};

const Template = args => <InputField {...args} />;
const InputTemplate = args => <Input {...args} />;

const DefaultInput = InputTemplate.bind({});
DefaultInput.args = {
  width: '100px',
};

export const Default = Template.bind({});
Default.args = {
  labelText: '기본 input 라벨',
  children: <DefaultInput placeholder="placeholder" width="100px" />,
};

export const CardNumberInput = Template.bind({});
CardNumberInput.args = {
  labelText: '카드 번호',
  children: [
    <DefaultInput placeholder="1234" width="60px" maxLength={'4'} />,
    '-',
    <DefaultInput placeholder="1234" width="60px" maxLength={'4'} />,
    '-',
    <DefaultInput type="password" placeholder="****" width="60px" maxLength={'4'} />,
    '-',
    <DefaultInput type="password" placeholder="****" width="60px" maxLength={'4'} />,
  ],
};

export const CardExpireDateInput = Template.bind({});
CardExpireDateInput.args = {
  labelText: '만료일(MM/YY)',
  children: [
    <DefaultInput placeholder="MM" width="50px" maxLength={'2'} />,
    '/',
    <DefaultInput placeholder="YY" width="50px" maxLength={'2'} />,
  ],
};

export const CardHolderNameInput = Template.bind({});
CardHolderNameInput.args = {
  labelText: '카드 소유자 이름 (선택)',
  children: [<DefaultInput placeholder="카드에 표시된 이름과 동일하게 입력하세요." width="280px" maxLength={'30'} />],
};

export const CardSecurityCodeInput = Template.bind({});
CardSecurityCodeInput.args = {
  labelText: '보안 코드(CVC/CVV)',
  children: [<DefaultInput type="password" placeholder="***" width="60px" maxLength={'3'} />],
};

export const CardPasswordInput = Template.bind({});
CardPasswordInput.args = {
  labelText: '카드 비밀번호 앞 두 자리',
  separateEachInput: true,
  children: [
    <DefaultInput type="password" placeholder="*" width="20px" maxLength={'1'} />,
    <DefaultInput type="password" placeholder="*" width="20px" maxLength={'1'} />,
  ],
};
