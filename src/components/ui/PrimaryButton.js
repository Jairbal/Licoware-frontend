import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #b2002d;
  margin-top: 32px;
  color: #fff;
  border: none;
  border-radius: 8px;
  height: 48px;
  outline: none;
  font-weight: 700;
  font-size: 16px;
  :hover {
    background-color: #8b0023;
    cursor: pointer;
  }
`;

export const PrimaryButton = ({type, onClick, value}) => {
    return (
        <Button onClick={onClick} type={type}>
            {value}
        </Button>
    )
}
