import { types } from "../types";

const initialState = {
  showFormNewFactura: false,
  facturas: [],
  active: {
    numero: "",
    proveedor: "",
    fecha: "",
    productos: [],
    credito: false,
    metodoPago: "",
    total: 0,
  },
  activeProduct: {
    productoId: null,
    precio: "",
    cantidad: "",
  },
  isEditing: false,
  isEditingProducto: false,
  modal: false,
  modalProducto: false,
  productoAbierto: false,
};

export const facturasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.facturaShowFormNewFactura:
      return {
        ...state,
        showFormNewFactura: action.payload,
      };
    case types.facturaAdd:
      return {
        ...state,
        facturas: [action.payload, ...state.facturas],
      };

    case types.facturaGetAll:
      return {
        ...state,
        facturas: action.payload,
      };

    case types.facturaSetActive:
      return {
        ...state,
        active: action.payload,
      };

    case types.facturaProductoAdd:
      return {
        ...state,
        active: {
          ...state.active,
          productos: [...state.active.productos, action.payload],
        },
      };

    case types.facturaProductoSetActive:
      return {
        ...state,
        activeProduct: action.payload,
      };

    case types.facturaProductoEdit:
      return {
        ...state,
        active: {
          productos: state.active.productos.map((producto) => {
            if (producto.productoId === action.payload.productoId) {
              return action.payload;
            }
            return producto;
          }),
        },
      };

    case types.facturaProductoDelete:
      return {
        ...state,
        active: {
          ...state.active,
          productos: state.active.productos.filter(
            (producto) => producto.productoId !== action.payload
          ),
        },
      };

    case types.facturaDelete:
      return {
        ...state,
        facturas: state.facturas.filter(
          (factura) => factura._id !== action.payload
        ),
      };

    case types.facturaProductoIsEditing:
      return {
        ...state,
        isEditingProducto: action.payload,
      };

    case types.facturaProductoAbierto:
      return {
        ...state,
        productoAbierto: action.payload,
      };

    case types.authLogout:
      return initialState;

    default:
      return {
        ...state,
      };
  }
};
