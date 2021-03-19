import axios from "axios";
import { config } from "../config";
import { uiError, uiClearError, loadingApp } from "./ui";

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
    dispatch(loadingApp(true));
    dispatch(uiClearError());

    axios({
      method: "POST",
      url: `${config.baseApiUrl}/auth/validar`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        apiKeyToken: config.apiKeyToken,
      },
    })
      .then((response) => {
        dispatch(validateToken(response.data.user));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("_id", response.data.user._id);
        dispatch(loadingApp(false));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(uiError(error.response.data.message));
          dispatch(loadingApp(false));
        }
      });
  };
}

export const logoutAsync = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  }
}

const login = (usuario) => ({
  type: types.authLogin,
  payload: usuario,
});

const validateToken = (usuario) => ({
  type: types.authValidateToken,
  payload: usuario,
});

const logout = () => ({
  type: types.authLogout,
})