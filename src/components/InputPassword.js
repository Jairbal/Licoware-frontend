import styled from "@emotion/styled";
import {css} from '@emotion/core';
import React, { useState } from "react";
import ShowHide from "../icons/ShowHide";
import InputError from "../components/InputError";

const WrapperInput = styled.div`
  position: relative;
  margin-top: 30px;
`;

const InputComponent = styled.input`
  color: #fff;
  background: none;
  outline: none;
  height: 100%;
  width: 100%;
  border: none;
  margin-top: 20px;
  border-bottom: 1px solid #9F9B9B;
  font-size: 17px;

  :focus ~ div:before {
    transform: scaleX(1);
  }

  :focus ~ label{
    transform: translateY(-20px);
    font-size: 12px;
    color: #fff;
`;

const Label = styled.label`
  position: absolute;
  bottom: 10px;
  left: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  width: 100%;
  transform: ${(props) => props.writing && "translateY(-20px)"};
  font-size: ${(props) => (props.writing ? "12px" : "16px")};
  color: ${(props) => (props.writing ? "#fff" : "#9F9B9B")};
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0px;
  height: 2px;
  width: 100%;
  background: ${(props) => props.color};

  :before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: #fff;
    transform: ${(props) => (props.writing ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 0.3s ease;
  }
`;

const ShowHidenButton = styled(ShowHide)`
  position: absolute;
  bottom: 10px;
  right: 0;
  color: red;

  :hover {
    cursor: pointer;
  }
`;

export default function InputPassword({
  name,
  value,
  handleChange,
  error,
  label,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const writing = value.length > 0;

  return (
    <>
      <WrapperInput>
        <InputComponent
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={handleChange}
          css={css`
            ${value.length > 0 && 
              'div:before { transform: scaleX(1); }' 
            }
          `}
        />
        <ShowHidenButton
          color={showPassword ? "#fff" : "#808080"}
          onClick={() => setShowPassword(!showPassword)}
        />
        <Underline color={error ? '#ff453a' : '#9F9B9B'} writing={writing}></Underline>
        <Label writing={writing}>{label}</Label>
      </WrapperInput>
      <InputError visible={error && error} message={error} />
    </>
  );
}
