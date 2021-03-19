import React, { useEffect, useState } from "react";
import Form from "./Form";
import Input from "../Input";
import { useForm } from "../../../hooks/useForm";
import { PrimaryButton } from "../PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import {
  contactoAddAsync,
  showFormNewContactoAction,
} from "../../../actions/proveedores";
import { ErrorMessage } from "../ErrorMessage";
import { CloseButton } from "../../../componentsStyles/ui/form/Form";

export const FormContacto = ({ proveedorId }) => {
  const dispatch = useDispatch();
  const messageError = useSelector((state) => state.ui.error.message);

  useEffect(() => {
    return () => {
      dispatch(showFormNewContactoAction(false));
    };
  }, [dispatch]);

  const [formData, handleFormData, reset] = useForm({
    nombre: "",
    telefono: "",
    cargo: "",
    proveedorId,
  });

  const [error, setError] = useState({
    nombre: "",
    telefono: "",
    cargo: "",
    proveedorId,
  });

  const { nombre, telefono, cargo } = formData;

  const handleCloseForm = () => {
    dispatch(showFormNewContactoAction(false));
  };

  const handleChange = (e) => {
    handleFormData(e);

    if (nombre.trim().length > 0) {
      setError({
        ...error,
        nombre: "",
      });
    }
    if (cargo.trim().length > 0) {
      setError({
        ...error,
        cargo: "",
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
      telefono.trim().length === 0 &&
      cargo.trim().length === 0
    ) {
      setError({
        ...error,
        nombre: "Campo obligatorio",
        telefono: "Campo obligatorio",
        cargo: "Campo obligatorio",
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
    if (cargo.trim().length < 2) {
      setError({
        ...error,
        cargo: "Campo obligatorio",
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

    dispatch(contactoAddAsync(formData));
    if (!!messageError) {
      reset();
      dispatch(showFormNewContactoAction(false));
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
        name="telefono"
        label="Telefono"
        type="number"
        value={telefono}
        handleChange={handleChange}
        error={error.telefono}
      />
      <Input
        name="cargo"
        label="Cargo"
        value={cargo}
        handleChange={handleChange}
        error={error.direccion}
      />
      <PrimaryButton value="Guardar" />
    </Form>
  );
};
