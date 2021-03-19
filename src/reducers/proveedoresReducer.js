import { types } from "../types";

const initialState = {
  showFormNewProveedor: false,
  showFormNewContacto: false,
  isEditing: false,
  modal: false,
  proveedores: [],
  active: {
    nombre: "",
    direccion: "",
    telefono: "",
    contactos: [],
  },
};

export const proveedoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.proveedorShowFormNewProveedor:
      return {
        ...state,
        showFormNewProveedor: action.payload,
      };

    case types.proveedorShowFormNewContacto:
      return {
        ...state,
        showFormNewContacto: action.payload,
      };

    case types.proveedorAdd:
      return {
        ...state,
        proveedores: [action.payload, ...state.proveedores],
      };

    case types.proveedorContactoAdd:
      return {
        ...state,
        active: {
          ...state.active,
          contactos: [action.payload, ...state.active.contactos],
        },
      };

    case types.proveedorGetAll:
      return {
        ...state,
        proveedores: action.payload,
      };

    case types.proveedorSetActive:
      return {
        ...state,
        active: action.payload,
      };

    case types.proveedorIsEditing:
      return {
        ...state,
        isEditing: action.payload,
      };

    case types.proveedorEdit:
      return {
        ...state,
        active: action.payload,
      };

    case types.proveedorModal:
      return {
        ...state,
        modal: !state.modal,
      };

    case types.proveedorDelete:
      return {
        ...state,
        proveedores: state.proveedores.filter(
          (proveedor) => proveedor._id !== action.payload
        ),
      };
    
    case types.authLogout: 
      return initialState;

    default:
      return {
        ...state,
      };
  }
};
