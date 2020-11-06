import { types } from "../types";

const initialState = {
  titlePage: "",
  loading: true,
  error: {
    place: null,
    message: null,
  }
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiChangePage:
      return {
        ...state,
        titlePage: action.payload,
      };

    case types.uiLoading: 
      return {
        ...state,
        loading: action.payload,
      };

    case types.uiError: 
      return {
        ...state,
        error: {
          ...state.error,
          message: action.payload,
        }
      }
    
    case types.uiClearError:
      return {
        ...state,
        error: initialState.error,
      }

    default:
      return {
        ...state,
      };
  }
};
