import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: 50px;
  height: 30px;

  border: none;
  background-color: inherit;

  color: #04c09e;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;

  position: absolute;
  right: 20px;
  bottom: 25px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
