import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";

export const Reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});
