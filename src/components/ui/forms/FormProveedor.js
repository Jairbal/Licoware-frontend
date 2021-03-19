import React, { useEffect, useState } from "react";
import Form from "./Form";
import Input from "../Input";
import { useForm } from "../../../hooks/useForm";
import { PrimaryButton } from "../PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import {
  proveedorAddAsync,
  proveedorEditAsync,
  proveedorIsEditing,
  showFormNewProveedorAction,
} from "../../../actions/proveedores";
import { ErrorMessage } from "../ErrorMessage";
import { CloseButton } from "../../../componentsStyles/ui/form/Form";

export const FormProveedor = () => {
  const dispatch = useDispatch();
  const messageError = useSelector((state) => state.ui.error.message);
  const { active, isEditing } = useSelector((state) => state.proveedores);

  const [formData, handleFormData, reset] = useForm(active);

  const [error, setError] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
  });

  const { nombre, direccion, telefono } = formData;

  useEffect(() => {
    return () => {
      if (isEditing) {
        dispatch(proveedorIsEditing(false));
      } else {
        dispatch(showFormNewProveedorAction(false));
      }
    };
  }, [dispatch, isEditing]);

  const handleCloseForm = () => {
    if (isEditing) {
      dispatch(proveedorIsEditing(false));
    } else {
      dispatch(showFormNewProveedorAction(false));
    }
  };

  const handleChange = (e) => {
    handleFormData(e);

    if (nombre.trim().length > 0) {
      setError({
        ...error,
        nombre: "",
      });
    }
    if (direccion.trim().length > 0) {
      setError({
        ...error,
        direccion: "",
      });
    }
    if (telefono.trim().length === 10) {
      setError({
        ...error,
        telefono: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validación del formulario
    if (
      nombre.trim().length === 0 &&
      direccion.trim().length === 0 &&
      telefono.trim().length === 0
    ) {
      setError({
        ...error,
        nombre: "Campo obligatorio",
        direccion: "Campo obligatorio",
        telefono: "Campo obligatorio",
      });
      return;
    }
    if (nombre.trim().length < 2) {
      setError({
        ...error,
        nombre: "Campo obligatorio",
      });
      return;
    }
    if (direccion.trim().length < 2) {
      setError({
        ...error,
        direccion: "Campo obligatorio",
      });
      return;
    }
    if (telefono.trim().length < 10) {
      setError({
        ...error,
        telefono: "El telefono debe tener 10 números",
      });
      return;
    }
    if (isEditing) {
      dispatch(proveedorEditAsync(formData));
      dispatch(proveedorIsEditing(false));
    } else {
      dispatch(proveedorAddAsync(formData));
    }

    if (!!messageError) {
      reset();
      dispatch(showFormNewProveedorAction(false));
    }
  };

  return (
    <Form
      className="animate__animated animate__backInUp"
      onSubmit={handleSubmit}
      id="#newProveedor"
    >
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
        name="direccion"
        label="Dirección"
        value={direccion}
        handleChange={handleChange}
        error={error.direccion}
      />
      <Input
        name="telefono"
        label="Telefono"
        type="number"
        value={telefono}
        handleChange={handleChange}
        error={error.telefono}
      />
      <PrimaryButton value="Guardar" />
    </Form>
  );
};
