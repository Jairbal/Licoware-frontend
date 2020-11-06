import React from "react";
import styled from "@emotion/styled";

import "./LoadingScreen.css";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position:fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
`;

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
