import React, { useState } from "react";
import Date from "react-date-picker";
import '../../componentsStyles/ui/Calendar.css';
import '../../componentsStyles/ui/DatePicker.css';
import {Wrapper} from '../../componentsStyles/ui/DatePicker';
import InputError from "./InputError";

export default function DatePicker({label, onChange, initialValue, minDate, error}) {
  const [value, setValue] = useState(initialValue);
  
  const onChangeDate = (e) => {
    setValue(e);
    onChange(e);
  }

  return (
    <Wrapper>
      <label>{label}</label>
      <Date onChange={onChangeDate} minDate={minDate} value={value} />
      <InputError visible={error && error} message={error} />
    </Wrapper>
  );
}
