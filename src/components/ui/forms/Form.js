import React from "react";
import {FormComponent} from '../../../componentsStyles/ui/form/Form';

export default function Form(props) {
  return (
    <FormComponent onSubmit={props.onSubmit} >{props.children}</FormComponent>
  );
}
