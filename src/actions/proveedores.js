import axios from "axios";
import { config } from "../config";
import { loading, uiClearError, uiError } from "./ui";
const { types } = require("../types");

export const showFormNewProveedorAction = (value) => ({
  type: types.proveedorShowFormNewProveedor,
  payload: value
});

export const proveedorAddAsync = (proveedor) => {
  const token = localStorage.getItem("token");
  delete proveedor.contactos;
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "POST",
      url: `${config.baseApiUrl}/proveedores`,
      headers: { Authorization: `Bearer ${token}` },
      data: proveedor,
    })
      .then((response) => {
        dispatch(loading(false));
        dispatch(proveedorAdd(response.data.proveedor));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(uiError(error.response.data.message));
          dispatch(loading(false));
        }
      });
  };
};

export const contactoAddAsync = (contacto) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    const {proveedorId} = contacto;
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "POST",
      url: `${config.baseApiUrl}/proveedores/${proveedorId}`,
      headers: { Authorization: `Bearer ${token}` },
      data: contacto,
    })
      .then((response) => {
        dispatch(contactoAdd(response.data.contacto));
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

export const proveedorGetAllAsync = () => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "GET",
      url: `${config.baseApiUrl}/proveedores`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(proveedorGetAll(response.data.data));
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

export const proveedorGetOneAsync = (id) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "GET",
      url: `${config.baseApiUrl}/proveedores/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(proveedorSetActive(response.data.proveedor));
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

export const proveedorEditAsync = (proveedor) => {
  const token = localStorage.getItem("token");
  const { _id, contactos } = proveedor;
  delete proveedor.contactos;
  delete proveedor._id;
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "PUT",
      url: `${config.baseApiUrl}/proveedores/${_id}`,
      headers: { Authorization: `Bearer ${token}` },
      data: proveedor,
    })
      .then(() => {
        proveedor._id = _id;
        proveedor.contactos = contactos;
        dispatch(proveedorEdit(proveedor));
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

export const proveedorDeleteAsync = (_id) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(loading(true));
    dispatch(uiClearError());
    axios({
      method: "DELETE",
      url: `${config.baseApiUrl}/proveedores/${_id}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch(proveedorDelete(_id));
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

const proveedorDelete = (_id) => ({
  type: types.proveedorDelete,
  payload: _id,
});

export const showFormNewContactoAction = (value) => ({
  type: types.proveedorShowFormNewContacto,
  payload: value
});

export const proveedorSetActive = (proveedor) => ({
  type: types.proveedorSetActive,
  payload: proveedor,
});

const proveedorAdd = (proveedor) => ({
  type: types.proveedorAdd,
  payload: proveedor,
});

const contactoAdd = (contacto) => ({
  type: types.proveedorContactoAdd,
  payload: contacto,
});

const proveedorGetAll = (proveedores) => ({
  type: types.proveedorGetAll,
  payload: proveedores,
});

export const proveedorIsEditing = (value) => ({
  type: types.proveedorIsEditing,
  payload: value
});

export const proveedorEdit = (proveedor) => ({
  type: types.proveedorEdit,
  payload: proveedor,
});

export const proveedorModal = () => ({
  type: types.proveedorModal,
});
