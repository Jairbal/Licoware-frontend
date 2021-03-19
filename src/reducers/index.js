import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { proveedoresReducer } from "./proveedoresReducer";
import { uiReducer } from "./uiReducer";
import { facturasReducer } from "./facturasReducer";
import { productosReducer } from "./productosReducer";

export const Reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  proveedores: proveedoresReducer,
  facturas: facturasReducer,
  productos: productosReducer,
});
