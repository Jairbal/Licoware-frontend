import axios from "axios";
import { config } from "../config";
import { uiError, uiClearError, loading } from "./ui";

import { types } from "../types";

// iniciar sesión
export function loginAsync({ usuario, password }) {
  return async (dispatch) => {
    dispatch(uiClearError());
    axios({
      method: "POST",
      url: `${config.baseApiUrl}/auth/entrar`,
      auth: {
        username: usuario,
        password: password,
      },
      data: {
        apiKeyToken: config.apiKeyToken,
      },
    })
      .then((user) => {
        dispatch(login(user.data.user));
        localStorage.setItem("token", user.data.token);
        localStorage.setItem("_id", user.data.user._id);
      })
      .catch((error) => {
        if (error.response) {
          dispatch(uiError(error.response.data.message));
        }
      });
  };
}

export function validateTokenAsync(token) {
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    
    axios({
      method: "POST",
      url: `${config.baseApiUrl}/auth/validar`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        apiKeyToken: config.apiKeyToken,
      },
    })
      .then((user) => {
        dispatch(loading(false));
        dispatch(validateToken(user.data.user));
        localStorage.setItem("token", user.data.token);
        localStorage.setItem("_id", user.data.user._id);
      })
      .catch((error) => {
        if (error.response) {
          dispatch(loading(false));
          dispatch(uiError(error.response.data.message));
        }
      });
      
  };
}

const login = (usuario) => ({
  type: types.authLogin,
  payload: usuario,
});

const validateToken = (usuario) => ({
  type: types.authValidateToken,
  payload: usuario,
});
