import { types } from "../types";

const initialState = {
  showFormNewProducto: false,
  showFormNewCategoria: false,
  productos: [],
  categorias: [],
  active: {},
  subPage: "productos",
};

export const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productosShowFormNewProducto:
      return {
        ...state,
        showFormNewProducto: action.payload,
      };

    case types.productosShowFormNewCategoria:
      return {
        ...state,
        showFormNewCategoria: action.payload,
      };

    case types.productosChangeSubPage:
      return {
        ...state,
        subPage: action.payload,
      };

    case types.productosGetAllCategorias:
      return {
        ...state,
        categorias: action.payload,
      };

    case types.productosAddCategoria:
      return {
        ...state,
        categorias: [action.payload, ...state.categorias],
      };

    case types.productosGetAll:
      return {
        ...state,
        productos: action.payload,
      };

    default:
      return state;
  }
};
