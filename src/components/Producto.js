import React from "react";
import { useHistory } from "react-router-dom";
import {
  Wrapper,
  Title,
  SecondaryText,
  ImagenProducto,
  RightIcon,
} from "../componentsStyles/Producto";

export const Producto = ({ producto }) => {
  const history = useHistory();

  const {
    _id,
    nombre,
    descripcion,
    categoria,
    stock,
    precioVenta,
    imagen,
  } = producto;

  const handleClickProducto = () => {
    history.push(`/productos/${_id}`);
    //dispatch(facturaSetActive(factura));
  };
  return (
    <Wrapper>
      <div>
        <Title>{nombre}</Title>
        <SecondaryText>{descripcion}</SecondaryText>
        <SecondaryText>{categoria.nombre}</SecondaryText>
        <SecondaryText>Stock: {stock}</SecondaryText>
        <SecondaryText>Precio: ${precioVenta}</SecondaryText>
      </div>
      <ImagenProducto src={imagen} alt={nombre} />
      <RightIcon onClick={handleClickProducto} />
    </Wrapper>
  );
};
