import React from "react";
import ContactoProveedor from "./ContactoProveedor";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { proveedorSetActive } from "../actions/proveedores";
import { Wrapper, Title, SecondaryText, RightIcon } from '../componentsStyles/Proveedor';

export default function Proveedor({ proveedor }) {
  
  const { nombre, direccion, telefono, contactos, _id } = proveedor;

  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickProveedor = () => {
    history.push(`/proveedores/${_id}`)
    dispatch(proveedorSetActive(proveedor));
  }

  return (
    <Wrapper>
      <Title>{nombre}</Title>
      <SecondaryText>{direccion}</SecondaryText>
      <SecondaryText>{telefono}</SecondaryText>
      {contactos.map((contacto) => (<ContactoProveedor key={contacto._id} contacto={contacto}/>))}
      <RightIcon onClick={handleClickProveedor}/>
    </Wrapper>
  );
}
