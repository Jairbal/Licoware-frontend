import React from "react";
import styled from "@emotion/styled";

import Error from "../icons/Error";

const Contenedor = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const Message = styled.p`
  margin-left: 5px;
  color: #ff453a;
`;

export default function InputError(props) {
  const { message, visible } = props;
  return visible ? (
    <Contenedor>
      <Error />
      <Message>{message}</Message>
    </Contenedor>
  ) : null;
}
