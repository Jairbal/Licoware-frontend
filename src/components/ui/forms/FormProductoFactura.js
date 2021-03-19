import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import { useForm } from "../../../hooks/useForm";
import Select from "../Select";
import {
  WrapperProductos,
  TitleProductos,
  ButtonAddProduct,
} from "../../../componentsStyles/ui/form/FormFactura";
import {
  facturaProductoAdd,
  facturaProductoIsEditing,
  facturaProductoEdit,
} from "../../../actions/facturas";
import { ProductosEnFactura } from "../../ProductosEnFactura";
import { parseEvent } from "../../../helpers/parseEvent";

export const FormProductoFactura = () => {
  const dispatch = useDispatch();

  const { active, activeProduct, isEditingProducto } = useSelector(
    (state) => state.facturas
  );
  const { productos } = useSelector((state) => state.productos);

  const [productoSelected, setProductoSelected] = useState(null);
  const [optionsProductos, setOptionsProductos] = useState([]);

  useEffect(() => {
    const optionsProductosFormat = productos.map((producto) => ({
      value: producto._id,
      label: producto.nombre.toUpperCase(),
    }));
    const newOptionsProductos = optionsProductosFormat.map((producto) => {
      active.productos.map((productoActive) => {
        if (producto.value === productoActive.productoId) {
          producto.isDisabled = true;
          return producto;
        }
        return producto;
      });
      return producto;
    });
    setOptionsProductos(newOptionsProductos);
    // eslint-disable-next-line
  }, [active.productos, productos]);

  // data de formulario de producto
  const [
    formDataProduct,
    handleFormDataProduct,
    resetProduct,
    setNewValuesProduct,
  ] = useForm({
    productoId: null,
    precio: "",
    cantidad: "",
  });

  useEffect(() => {
    if (isEditingProducto) {
      const producto = optionsProductos.find(
        (prod) => prod.value === activeProduct.productoId
      );
      setProductoSelected(producto);
      setNewValuesProduct(activeProduct);
    }
    // eslint-disable-next-line
  }, [isEditingProducto]);

  const { productoId, precio, cantidad } = formDataProduct;
  const [errorProduct, setErrorProduct] = useState({
    productoId: "",
    precio: "",
    cantidad: "",
  });

  const handleButtonAddProduct = () => {
    if (productoId === null) {
      setErrorProduct({
        ...errorProduct,
        productoId: "Debe seleccionar un producto",
      });
      return;
    } else if (cantidad <= 0) {
      setErrorProduct({
        ...errorProduct,
        cantidad: "Cantidad incorrecta",
      });
      return;
    } else if (precio <= 0) {
      setErrorProduct({
        ...errorProduct,
        precio: "Precio incorrecto",
      });
      return;
    }
    if (isEditingProducto) {
      dispatch(facturaProductoEdit(formDataProduct));
      dispatch(facturaProductoIsEditing(false));
    } else {
      dispatch(facturaProductoAdd(formDataProduct));
    }
    setProductoSelected(null);
    resetProduct();
  };

  return (
    <WrapperProductos>
      <ProductosEnFactura productos={active.productos} />
      <TitleProductos>PRODUCTOS</TitleProductos>
      <Select
        options={optionsProductos}
        placeholder="Producto"
        onChange={(e) => {
          setProductoSelected(e);
          parseEvent(e.value, "productoId", handleFormDataProduct);
        }}
        error={errorProduct.productoId}
        value={productoSelected}
      />
      <Input
        type="number"
        name="cantidad"
        label="Cantidad de compra"
        value={cantidad}
        handleChange={handleFormDataProduct}
        error={errorProduct.cantidad}
      />
      <Input
        type="number"
        name="precio"
        label="Precio de compra"
        value={precio}
        handleChange={handleFormDataProduct}
        error={errorProduct.precio}
      />
      <ButtonAddProduct type="button" onClick={handleButtonAddProduct}>
        Añadir
      </ButtonAddProduct>
    </WrapperProductos>
  );
};
