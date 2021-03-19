import { types } from "../types";

const initialState = {
  _id: null,
  nombre: null,
  apellido: null,
  rol: null,
  usuario: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authValidateToken:
    case types.authLogin:
      return {
        ...initialState,
        apellido: action.payload.apellido,
        nombre: action.payload.nombre,
        rol: action.payload.rol,
        usuario: action.payload.usuario,
        _id: action.payload._id,
        isAuthenticated: true,
      };

    case types.authLogout: 
      return initialState;

    default:
      return {
        ...state,
      };
  }
};
