import {css} from '@emotion/core';
import React, { useState } from "react";
import InputError from "./InputError";
import {WrapperInput, InputComponent, ShowHidenButton, Underline, Label} from '../../componentsStyles/ui/InputPassword';

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
