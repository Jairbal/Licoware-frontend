import React, { useState } from "react";
import { DateTime } from "luxon";
import { ErrorMessage } from "../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { showFormNewProductoAction } from "../../../actions/productos";
import Input from "../Input";
import Select from "../Select";
import { PrimaryButton } from "../PrimaryButton";
import { productoAddAsync } from "../../../actions/productos";
import { CloseButton } from "../../../componentsStyles/ui/form/Form";
import {
  Form,
  UploadImage,
  PreviewImg,
} from "../../../componentsStyles/ui/form/FormProducto";

export const FormProducto = () => {
  const dispatch = useDispatch();
  const messageError = useSelector((state) => state.ui.error.message);
  const userId = useSelector((state) => state.auth._id);
  const { categorias } = useSelector((state) => state.productos);
  const formData = new FormData();

  const [pathImagen, setPathImagen] = useState("");

  const [data, setData] = useState({
    creator: userId,
    createdAt: DateTime.local(),
    nombre: "",
    descripcion: "",
    categoria: "",
    stock: 0,
    precioVenta: "",
    imagen: null,
  });

  const reset = () => {
    setData({
      ...data,
      createdAt: "",
      nombre: "",
      descripcion: "",
      categoria: "",
      stock: 0,
      precioVenta: "",
      imagen: null,
    });
  };

  const { nombre, descripcion, categoria, precioVenta } = data;

  const [error, setError] = useState({
    nombre: "",
    categoria: "",
    precioVenta: "",
  });

  const optionsCategorias = categorias.map((categoria) => ({
    value: categoria._id,
    label: categoria.nombre.toUpperCase(),
  }));

  const handleCloseForm = () => {
    dispatch(showFormNewProductoAction(false));
  };

  const handleChange = (e) => {
    handledata(e);

    if (nombre.trim().length > 0) {
      setError({
        ...error,
        nombre: "",
      });
    }

    if (categoria.trim().length > 0) {
      setError({
        ...error,
        categoria: "",
      });
    }

    if (precioVenta === 0) {
      setError({
        ...error,
        categoria: "",
      });
    }
  };

  // agrega el nombre del target
  // formatea el con los datos necesarios para pasar datos al estado
  const onChangeCategoria = (e) => {
    e.target = {
      name: "categoria",
      value: e.value,
    };
    handleChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 2) {
      setError({
        ...error,
        nombre: "El nombre debe ser mas largo",
      });
      return;
    }

    if (categoria.trim().length < 2) {
      setError({
        ...error,
        categoria: "La categoría es obligatoria",
      });
      return;
    }

    if (precioVenta <= 0) {
      setError({
        ...error,
        precioVenta: "Precio incorrecto",
      });
      return;
    }

    for (const property in data) {
      formData.append(property, data[property]);
    }
    console.log(data);
    dispatch(productoAddAsync(formData));
    if (!!messageError) {
      reset();
      dispatch(showFormNewProductoAction(false));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function load() {
          setPathImagen(reader.result);
        };

        setData({
          ...data,
          [e.target.name]: file,
        });
      } else {
        console.log("ha ocurrido un error");
      }
    }
  };

  const handledata = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit} encType="multipart/form-data">
      {messageError && <ErrorMessage />}
      <CloseButton type="button" onClick={handleCloseForm}>
        x
      </CloseButton>
      <Input
        name="nombre"
        label="Nombre"
        value={nombre}
        handleChange={handleChange}
        error={error.nombre}
      />
      <Input
        name="descripcion"
        label="Descripción"
        textArea={true}
        value={descripcion}
        handleChange={handleChange}
      />
      <Select
        options={optionsCategorias}
        onChange={onChangeCategoria}
        placeholder="Categoría"
        error={error.categoria}
      />
      <Input
        name="precioVenta"
        label="Precio de Venta"
        type="number"
        value={precioVenta}
        handleChange={handleChange}
        error={error.precioVenta}
      />
      <UploadImage
        name="imagen"
        type="file"
        onChange={handleFileChange}
        accept=".jpg, .png"
      />
      <PreviewImg
        src={pathImagen}
        alt="Previsualización Producto"
        visible={pathImagen}
      />
      <PrimaryButton value="Guardar" />
    </Form>
  );
};
