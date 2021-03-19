import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Proveedor from "../components/Proveedor";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../actions/ui";
import { FormProveedor } from "../components/ui/forms/FormProveedor";
import Add from "../icons/Add";

import { showFormNewProveedorAction } from "../actions/proveedores";

const Wrapper = styled.div`
  margin: 88px 24px 74px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const AddButton = styled(Add)`
  right: 0;
  bottom: 0;
  position: fixed;
  margin-bottom: 74px;
  margin-right: 24px;
`;

export default function Proveedores() {
  // dispatch de redux
  const dispatch = useDispatch();
  const { showFormNewProveedor, proveedores } = useSelector(
    (state) => state.proveedores
  );

  // Cambiar el nombre de la página en el Head (Componenten Layout)
  useEffect(() => {
    if(showFormNewProveedor) {
      dispatch(changePage("PROVEEDORES > NUEVO PROVEEDOR"))
    } else {
      dispatch(changePage("PROVEEDORES"));
    }
  }, [showFormNewProveedor, dispatch])

  const handleButtonAddProveedor = () => {
    dispatch(showFormNewProveedorAction(true));
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Wrapper>
      {showFormNewProveedor && <FormProveedor />}
      {proveedores.map((proveedor) => (
        <Proveedor key={proveedor._id} proveedor={proveedor} />
      ))}
      <AddButton onClick={handleButtonAddProveedor} />
    </Wrapper>
  );
}
