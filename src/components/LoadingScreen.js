import React from "react";
import {Wrapper} from '../componentsStyles/LoadingScreen';

import "../componentsStyles/LoadingScreen.css";

export const LoadingScreen = () => {
  return (
    <Wrapper>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
      <p>Cargando...</p>
    </Wrapper>
  );
};
