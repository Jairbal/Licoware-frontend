import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import Form from "./Form";
import Input from "../Input";
import Select from "../Select";
import DatePicker from "../DatePicker";
import { Credito } from "../Credito";
import { optionsMetodosPago } from "../../../helpers/metodosPago";
import { PrimaryButton } from "../PrimaryButton";
import {
  facturaAddAsync,
  showFormNewFacturaAction,
} from "../../../actions/facturas";
import { CloseButton } from "../../../componentsStyles/ui/form/Form";
import { FormProductoFactura } from "./FormProductoFactura";
import { parseEvent } from "../../../helpers/parseEvent";

export const FormFactura = () => {
  const dispatch = useDispatch();
  const [optionsProveedores, setOptionsProveedores] = useState([]);

  // Data naecesaria
  const { proveedores } = useSelector((state) => state.proveedores);
  const messageError = useSelector((state) => state.ui.error.message);
  const { active } = useSelector((state) => state.facturas);

  useEffect(() => {
    const optionsProveedoresFormat = proveedores.map((proveedor) => ({
      value: proveedor._id,
      label: proveedor.nombre.toUpperCase(),
    }));

    setOptionsProveedores(optionsProveedoresFormat);
  }, [proveedores]);

  useEffect(() => {
    parseEvent(active.productos, "productos", handleFormData);
  }, [active.productos]);

  // data de formulario general
  const [formData, handleFormData, reset] = useForm(active);

  // extración de data
  const { numero, proveedor, fecha, metodoPago } = formData;

  const [error, setError] = useState({
    numero: "",
    proveedor: "",
    fecha: "",
    metodoPago: "",
  });

  const handleCloseForm = () => {
    dispatch(showFormNewFacturaAction(false));
  };

  const clearErrors = () => {
    if (numero.trim().length > 0) {
      setError({
        ...error,
        numero: "",
      });
    }
    if (proveedor.trim().length > 0) {
      setError({
        ...error,
        proveedor: "",
      });
    }
    if (fecha.trim().length > 0) {
      setError({
        ...error,
        fecha: "",
      });
    }
    if (metodoPago.trim().length > 0) {
      setError({
        ...error,
        metodoPago: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion
    if (numero.trim().length === 0) {
      setError({
        ...error,
        numero: "El número de factura es obligatorio",
      });
      return;
    }
    if (proveedor.trim().length === 0) {
      setError({
        ...error,
        proveedor: "El proveedor es obligatorio",
      });
      return;
    }

    if (!fecha) {
      setError({
        ...error,
        fecha: "La fecha es obligatoria",
      });
      return;
    }
    if (metodoPago.trim().length === 0) {
      setError({
        ...error,
        metodoPago: "El método de pago es obligatorio",
      });
      return;
    }
    dispatch(facturaAddAsync(formData));
    if (!!messageError) {
      reset();
      dispatch(showFormNewFacturaAction(false));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CloseButton type="button" onClick={handleCloseForm}>
        x
      </CloseButton>
      <Input
        name="numero"
        label="Numero de factura"
        value={numero}
        handleChange={(e) => {
          handleFormData(e);
          clearErrors();
        }}
        error={error.numero}
      />
      <Select
        options={optionsProveedores}
        onChange={(e) => {
          parseEvent(e.value, "proveedor", handleFormData);
          clearErrors();
        }}
        placeholder="Proveedor"
        error={error.proveedor}
      />
      <DatePicker
        label="Fecha de factura"
        initialValue={fecha}
        onChange={(e) => {
          parseEvent(e, "fecha", handleFormData);
          clearErrors();
        }}
        error={error.fecha}
      />
      <FormProductoFactura />
      <Credito minDate={fecha} onChange={handleFormData} />
      <Select
        options={optionsMetodosPago}
        onChange={(e) => {
          parseEvent(e.value, "metodoPago", handleFormData);
          clearErrors();
        }}
        placeholder="Método de Pago"
        error={error.metodoPago}
      />
      <PrimaryButton value="Guardar" />
    </Form>
  );
};
