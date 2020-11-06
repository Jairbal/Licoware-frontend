import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Proveedor from "../components/Proveedor";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../actions/ui";
import { FormNewProveedor } from "../components/FormNewProveedor";
import { AddButton } from "../components/ui/AddButton";

import { showNewFormAction } from "../actions/proveedor";

const Wrapper = styled.div`
  margin: 88px 24px 74px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function Proveedores(props) {
  // dispatch de redux
  const dispatch = useDispatch();
  const {showNewForm} = useSelector((state) => state.proveedores);


  // Cambiar el nombre de la página en el Head (Componenten Layout)
  useEffect(() => {
    dispatch(changePage("PROVEEDORES"));
  }, [dispatch]);

  const handleButtonAddProveedor = () => {
    dispatch(showNewFormAction());
  };

  return (
    <Wrapper>
      {showNewForm && <FormNewProveedor />}
      <Proveedor />
      <Proveedor />
      <Proveedor />
      <Proveedor />
      <Proveedor />
      <Proveedor />
      <Proveedor />
      <AddButton handleOnClick={handleButtonAddProveedor} />
    </Wrapper>
  );
}
