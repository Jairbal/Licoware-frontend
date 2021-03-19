import React, { useEffect, useState } from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import {
  CategoriaAddAsync,
  showFormNewCategoriaAction,
} from "../../../actions/productos";
import { useForm } from "../../../hooks/useForm";
import Input from "../Input";
import { PrimaryButton } from "../PrimaryButton";
import { ErrorMessage } from "../ErrorMessage";
import {CloseButton} from '../../../componentsStyles/ui/form/Form';

export const FormCategoria = () => {
  const dispatch = useDispatch();
  const messageError = useSelector((state) => state.ui.error.message);

  useEffect(() => {
    return () => {
      dispatch(showFormNewCategoriaAction(false));
    };
  }, [dispatch]);

  const handleCloseForm = () => {
    dispatch(showFormNewCategoriaAction(false));
  };

  const [formData, handleFormData, reset] = useForm({
    nombre: "",
  });

  const { nombre } = formData;

  const [error, setError] = useState({
    nombre: "",
  });

  const handleChange = (e) => {
    handleFormData(e);
    if (nombre.trim().length > 0) {
      setError({
        ...error,
        nombre: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim().length === 0) {
      setError({
        ...error,
        nombre: "El nombre es obligatorio",
      });
    }

    dispatch(CategoriaAddAsync(formData));
    if (!!messageError) {
      reset();
      dispatch(showFormNewCategoriaAction(false));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CloseButton type="button" onClick={handleCloseForm}>
        x
      </CloseButton>
      {messageError && <ErrorMessage />}
      <Input
        name="nombre"
        label="Nombre"
        value={nombre.toUpperCase()}
        handleChange={handleChange}
        error={error.nombre}
      />
      <PrimaryButton value="Guardar" />
    </Form>
  );
};
