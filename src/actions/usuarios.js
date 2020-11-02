import clientAxios from ".";
import { types } from "../types";

// iniciar sesión
export function iniciarSesionAction(usuario) {
  return async (dispatch) => {
    dispatch(iniciarSesion);
    try {
      const data = await clientAxios.arguments({
        url: "/entrar",
        method: "post",
        auth: {
          username: usuario.usuario,
          password: usuario.password,
        },
      });
      console.log(data);
      document.cookie = `usuario=${data.usuario.usuario}`
    } catch(e) {
        console.log(e);
    }
  };
}

const iniciarSesion = (usuario) => ({
  type: types.authIniciarSesion,
  payload: usuario,
});
