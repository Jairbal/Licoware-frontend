import React from "react";
import styled from "@emotion/styled";

const FormComponent = styled.form`
  margin: 24px;
  display: flex;
  flex-direction: column;
`;

export default function Form(props) {
  return (
    <FormComponent onSubmit={props.onSubmit}>{props.children}</FormComponent>
  );
}
