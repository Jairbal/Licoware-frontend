import React from "react";
import { useSelector } from "react-redux";
import { Wrapper, Message } from "../../componentsStyles/ui/ErrorMessage";

export const ErrorMessage = () => {
  const { message } = useSelector((state) => state.ui.error);

  return (
    <Wrapper className="animate__animated animate__flash">
      <Message>{message}</Message>
    </Wrapper>
  );
};
