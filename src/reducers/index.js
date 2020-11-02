import { combineReducers } from 'redux';
import usuarioReducer from './usuarioReducer';
import uiReducer from './uiReducer';

export default combineReducers({
    usuario: usuarioReducer,
    ui: uiReducer,
});