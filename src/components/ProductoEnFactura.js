import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Column, ColumnHead } from "../componentsStyles/ProductoEnFactura";
import {
  facturaProductoDelete,
  facturaProductoSetActive,
  facturaProductoIsEditing,
  facturaProductoAbierto,
} from "../actions/facturas";
import Delete from "../icons/Delete";
import Edit from "../icons/Edit";

export const ProductoEnFactura = ({ producto }) => {
  const { productoId, precio, cantidad } = producto;
  const dispatch = useDispatch();
  const { productos } = useSelector((state) => state.productos);
  const { productoAbierto } = useSelector((state) => state.facturas);
  let nombreProducto = productos.find((product) => product._id === productoId);
  const total = precio * cantidad;

  const editProducto = () => {
    dispatch(facturaProductoSetActive(producto));
    dispatch(facturaProductoIsEditing(true));
  };

  const deleteProducto = () => {
    dispatch(facturaProductoDelete(productoId));
  };

  const handleClickProducto = () => {
    dispatch(facturaProductoAbierto(productoId));
  }

  return (
    <>
      <thead onClick={handleClickProducto}>
        <Row>
          <ColumnHead>{nombreProducto.nombre}</ColumnHead>
          {productoAbierto === productoId && (
            <>
              <th>
                <button type="button" onClick={editProducto}>
                  <Edit />
                </button>
              </th>
              <th>
                <button type="button" onClick={deleteProducto}>
                  <Delete />
                </button>
              </th>
            </>
          )}
        </Row>
        <Row>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
        </Row>
      </thead>
      <tbody onClick={handleClickProducto}>
        <Row>
          <Column>{precio}</Column>
          <Column>{cantidad}</Column>
          <Column>{total}</Column>
        </Row>
      </tbody>
    </>
  );
};
