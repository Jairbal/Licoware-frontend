import React from "react";
import InputError from "./InputError";
import {
  WrapperInput,
  TextAreaComponent,
  InputComponent,
  Underline,
  Label,
} from "../../componentsStyles/ui/Input";

export default function Input({
  name,
  type = "text",
  textArea = false,
  value,
  handleChange,
  error,
  label,
}) {
  const writing = value.length > 0;

  return (
    <>
      <WrapperInput>
        {textArea ? (
          <TextAreaComponent
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <InputComponent
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
          />
        )}
        <Underline
          color={error ? "#ff453a" : "#9F9B9B"}
          writing={writing}
        ></Underline>
        <Label writing={writing} textArea={textArea}>
          {label}
        </Label>
      </WrapperInput>
      <InputError visible={error && error} message={error} />
    </>
  );
}
