import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { proveedoresReducer } from "./proveedoresReducer";
import { uiReducer } from "./uiReducer";

export const Reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  proveedores: proveedoresReducer
});
