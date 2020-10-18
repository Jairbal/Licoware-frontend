import styled from "@emotion/styled";
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
  :focus ~ label,
  :valid ~ label {
    transform: translateY(-20px);
    font-size: 12px;
    color: #fff;
  }

  :focus ~ div:before,
  :valid ~ div:before {
    transform: scaleX(1);
  }
`;

const Label = styled.label`
  position: absolute;
  bottom: 10px;
  left: 0;
  color: #9F9B9B;
  pointer-events: none;
  transition: all 0.3s ease;
  width: 100%;
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0px;
  height: 2px;
  width: 100%;

  :before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: #fff;
    transform: scaleX(0);
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

  return (
    <>
      <WrapperInput>
        <InputComponent
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={handleChange}
          required
        />
        <ShowHidenButton
          color={showPassword ? "#fff" : "#808080"}
          onClick={() => setShowPassword(!showPassword)}
        />
        <Underline></Underline>
        <Label>{label}</Label>
      </WrapperInput>
      <InputError visible={error && error} message={error} />
    </>
  );
}
