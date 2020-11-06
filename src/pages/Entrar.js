import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import Form from "../components/Form";
import InputPassword from "../components/InputPassword";
import Input from "../components/Input";

// actions de redux
import { loginAsync } from "../actions/auth";
import { changePage } from "../actions/ui";
import { ErrorMessage } from "../components/ErrorMessage";

const Wrapper = styled.div`
  margin-top: 88px;
`;

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
  // dispatch de redux
  const dispatch = useDispatch();

  const {message: messageError} = useSelector(state => state.ui.error)

  // Cambiar el nombre de la página en el Head (Componenten Layout)
  useEffect(() => {
    dispatch(changePage("INICIAR SESIÓN"));
  }, [dispatch]);

  const [formData, setFormData] = useState({
    usuario: "",
    password: "",
  });

  const [error, setError] = useState({
    usuario: "",
    password: "",
  });

  const { usuario, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    clearErrors();
  };

  const clearErrors = () => {
    if (usuario.trim().length > 0) {
      setError({
        ...error,
        usuario: "",
      });
    }
    if (password.trim().length > 0) {
      setError({
        ...error,
        password: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validación del formulario
    if (usuario.trim().length === 0 && password.trim().length === 0) {
      setError({
        ...error,
        password: "Campo obligatorio",
        usuario: "Campo obligatorio",
      });
      return;
    }
    if (usuario.trim().length === 0) {
      setError({
        ...error,
        usuario: "Campo obligatorio",
      });
      return;
    }
    if (password.trim().length === 0) {
      setError({
        ...error,
        password: "Campo obligatorio",
      });
      return;
    }

    dispatch(loginAsync(formData));

    // redirección al home
    //props.history.push("/");
  };

  return (
    <Wrapper>
      
      <Form onSubmit={handleSubmit}>
      {messageError && <ErrorMessage/>}
        <Input
          name="usuario"
          label="Usuario"
          value={usuario}
          handleChange={handleChange}
          error={error.usuario}
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
    </Wrapper>
  );
}
