import { types } from "../types";

const initialState = {
  showNewForm: false,
};

export const proveedoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.proveedorShowNewForm:
      return {
        ...state,
        showNewForm: !state.showNewForm,
      };

    default: 
        return { 
            ...state
         };
  }
};
