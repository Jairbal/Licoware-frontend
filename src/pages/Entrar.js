import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Form from "../components/Form";
import InputPassword from "../components/InputPassword";
import Input from "../components/Input";

// ToDo
// Arreglar validación de errores en el formulario

const Button = styled.button`
  background-color: #b2002d;
  margin-top: 32px;
  color: #fff;
  border: none;
  border-radius: 8px;
  height: 48px;
  outline: none;
  font-weight: 700;
  font-size: 16px;
  :hover {
    background-color: #8b0023;
    cursor: pointer;
  }
`;

export default function Entrar(props) {
  const { setTitlePage } = props;

  // Cambiar el nombre de la página en el Head (Componenten Layout)
  useEffect(() => {
    setTitlePage("INICIAR SESIÓN");
  }, [setTitlePage]);

  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const [error, setError] = useState({
    user: "",
    password: "",
  });

  const { user, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    handleError();
  };

  const handleError = () => {
    if (user.trim() === "") {
      setError({
        ...error,
        user: "Campo obligatorio",
      });
      return;
    }
    if (password.trim() === "") {
      setError({
        ...error,
        password: "Campo obligatorio",
      });
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleError();
    if (error.user || error.password) return;

    props.history.push("/");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          name="user"
          label="Usuario"
          value={user}
          handleChange={handleChange}
          error={error.user}
        />
        <InputPassword
          name="password"
          label="Contraseña"
          value={password}
          handleChange={handleChange}
          error={error.password}
        />
        <Button>Entrar</Button>
      </Form>
    </>
  );
}
