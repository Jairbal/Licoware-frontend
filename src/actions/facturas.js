import axios from "axios";
import { config } from "../config";
import { loading, uiClearError, uiError } from "./ui";
const { types } = require("../types");

export const showFormNewFacturaAction = (value) => ({
  type: types.facturaShowFormNewFactura,
  payload: value,
});

export const facturaGetAllAsync = () => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "GET",
      url: `${config.baseApiUrl}/facturas`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(facturaGetAll(response.data.data));
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

const facturaGetAll = (facturas) => ({
  type: types.facturaGetAll,
  payload: facturas,
});

export const facturaAddAsync = (factura) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "POST",
      url: `${config.baseApiUrl}/facturas`,
      headers: { Authorization: `Bearer ${token}` },
      data: factura,
    })
      .then((response) => {
        dispatch(loading(false));
        console.log(response);
        dispatch(facturaAdd(response.data.factura));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(uiError(error.response.data.message));
          dispatch(loading(false));
        }
      });
  };
};

const facturaAdd = (factura) => ({
  type: types.facturaAdd,
  payload: factura,
});

export const facturaSetActive = (factura) => ({
  type: types.facturaSetActive,
  payload: factura,
});

export const facturaProductoSetActive = (product) => ({
  type: types.facturaProductoSetActive,
  payload: product,
});

export const facturaProductoAdd = (product) => ({
  type: types.facturaProductoAdd,
  payload: product,
});

export const facturaProductoIsEditing = (value) => ({
  type: types.facturaProductoIsEditing,
  payload: value,
});

export const facturaIsEditing = (value) => ({
  type: types.facturaIsEditing,
  payload: value,
});

export const facturaProductoEdit = (producto) => ({
  type: types.facturaProductoEdit,
  payload: producto,
});

export const facturaEdit = (factura) => ({
  type: types.facturaEdit,
  payload: factura,
});

export const facturaProductoDelete = (_id) => ({
  type: types.facturaProductoDelete,
  payload: _id,
});

export const facturaDelete = (_id) => ({
  type: types.facturaDelete,
  payload: _id,
});

export const facturaProductoModal = () => ({
  type: types.facturaProductoModal
});

export const facturaModal = () => ({
  type: types.facturaModal
});

export const facturaProductoAbierto = (productoId) => ({
  type: types.facturaProductoAbierto,
  payload: productoId,
})
