import React from "react";
import Modal from "react-modal";
import {
  Wrapper,
  Title,
  Message,
  Button,
  Buttons,
  customStyles,
} from "../../componentsStyles/ui/ConfirmationMessage";

Modal.setAppElement("#modal");

export const ConfirmationMessage = ({
  title,
  message,
  onAccept,
  close,
  isOpen,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={close} style={customStyles}>
      <Wrapper>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <Buttons>
          <Button bg="#b2002d" color="white" right="5px" onClick={onAccept}>
            Aceptar
          </Button>
          <Button bg="white" left="5px" onClick={close}>
            Cancelar
          </Button>
        </Buttons>
      </Wrapper>
    </Modal>
  );
};
