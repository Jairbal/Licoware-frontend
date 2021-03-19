import axios from "axios";
import { config } from "../config";
import { loading, uiClearError, uiError } from "./ui";
import { types } from "../types";

export const showFormNewProductoAction = (value) => ({
  type: types.productosShowFormNewProducto,
  payload: value,
});

export const showFormNewCategoriaAction = (value) => ({
  type: types.productosShowFormNewCategoria,
  payload: value,
});

export const changeSubPage = (subpage) => ({
  type: types.productosChangeSubPage,
  payload: subpage,
});

export const CategoriaAddAsync = (categoria) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "POST",
      url: `${config.baseApiUrl}/categorias`,
      headers: { Authorization: `Bearer ${token}` },
      data: categoria,
    })
      .then((response) => {
        dispatch(categoriaAdd(response.data.categoria));
        dispatch(loading(false));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(uiError(error.response.data.message));
          dispatch(loading(false));
        }
      });
  };
};

export const productoAddAsync = (producto) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "POST",
      url: `${config.baseApiUrl}/productos`,
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': "multipart/form-data; boundary=something",
     },
      data: producto,
    })
      .then((response) => {
        dispatch(productoAdd(response.data.producto));
        dispatch(loading(false));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(uiError(error.response.data.message));
          dispatch(loading(false));
        }
      });
  };
};

const productoAdd = (producto) => ({
  type: types.productosAdd,
  payload: producto,
});

const categoriaAdd = (categoria) => ({
  type: types.productosAddCategoria,
  payload: categoria,
});

export const categoriasGetAllAsync = () => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "GET",
      url: `${config.baseApiUrl}/categorias`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(categoriasGetAll(response.data.data));
        dispatch(loading(false));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(uiError(error.response.data.message));
          dispatch(loading(false));
        }
      });
  };
};

export const categoriasGetAll = (categorias) => ({
  type: types.productosGetAllCategorias,
  payload: categorias,
});


export const productosGetAllAsync = () => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "GET",
      url: `${config.baseApiUrl}/productos`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(productosGetAll(response.data.data));
        dispatch(loading(false));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(uiError(error.response.data.message));
          dispatch(loading(false));
        }
      });
  };
};

export const productosGetAll = (productos) => ({
  type: types.productosGetAll,
  payload: productos,
});