import { types } from '../types';

const initialState = {
    usuario: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.authIniciarSesion:
            return {
                ...initialState,
                usuario: action.payload,
            }
        default:
            return {
                ...initialState,
            }
    }
} 