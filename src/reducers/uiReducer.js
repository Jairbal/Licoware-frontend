import { types } from "../types"

const initialState = {
    titlePage: ''
}

export default  (state = initialState, action) => {
    switch (action.type) {
        case types.uiCambioPagina:
            return {
                ...state,
                titlePage: action.payload
            }
        
        default: 
            return {
                ...state,
            }
    }
}