import React from "react";
import {Button} from "../../componentsStyles/ui/PrimaryButton";

export const PrimaryButton = ({ type, onClick, value }) => {
  return (
    <Button onClick={onClick} type={type}>
      {value}
    </Button>
  );
};
