import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../actions/ui";
import { FormFactura } from "../components/ui/forms/FormFactura";
import Add from "../icons/Add";
import { showFormNewFacturaAction } from "../actions/facturas";
import Factura from "../components/Factura";

const Wrapper = styled.div`
  margin: 88px 24px 74px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;
`;

const AddButton = styled(Add)`
  right: 0;
  bottom: 0;
  position: fixed;
  margin-bottom: 74px;
  margin-right: 24px;
`;

export default function Facturas(props) {
  // dispatch de redux
  const dispatch = useDispatch();

  const { showFormNewFactura, facturas } = useSelector(
    (state) => state.facturas
  );

  // Cambiar el nombre de la página en el Head (Componenten Layout)
  useEffect(() => {
    if(showFormNewFactura){
      dispatch(changePage("FACTURAS > NUEVA FACTURA"));
    }else {
    dispatch(changePage("FACTURAS"));
    }
  }, [dispatch, showFormNewFactura]);

  const handleButtonAddProveedor = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    dispatch(showFormNewFacturaAction(true));
  };

  return (
    <Wrapper>
      {showFormNewFactura && <FormFactura />}
      {facturas.map((factura) => (
        <Factura key={factura._id} factura={factura} />
      ))}
      <AddButton onClick={handleButtonAddProveedor} />
    </Wrapper>
  );
}
