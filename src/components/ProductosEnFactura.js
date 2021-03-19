import React from "react";
import { ProductoEnFactura } from "./ProductoEnFactura";
import { Table, Row, ColumnFoot } from "../componentsStyles/ProductoEnFactura";

export const ProductosEnFactura = ({ productos }) => {
  const reducer = (accumulator, { precio, cantidad }) =>
    accumulator + precio * cantidad;
  const total = productos.reduce(reducer, 0);

  return (
    <Table>
      {productos.map((producto) => (
        <ProductoEnFactura producto={producto} key={producto.productoId} />
      ))}
      <tfoot>
        <Row>
          <ColumnFoot>Total Factura: {total}</ColumnFoot>
        </Row>
      </tfoot>
    </Table>
  );
};
