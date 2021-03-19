import React from "react";
import SelectComponent from "react-select";
import InputError from "./InputError";
import { Wrapper, colourStyles } from "../../componentsStyles/ui/Select";

export default function Select({
  options,
  onChange,
  placeholder,
  error,
  name,
  value
}) {
  return (
    <>
      <Wrapper>
        <SelectComponent
          options={options}
          onChange={onChange}
          placeholder={placeholder}
          styles={colourStyles}
          name={name}
          value={value}
        />
      </Wrapper>
      <InputError visible={error && error} message={error} />
    </>
  );
}
