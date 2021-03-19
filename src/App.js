import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { validateTokenAsync } from "./actions/auth.js";
import { facturaGetAllAsync } from "./actions/facturas.js";
import {
  categoriasGetAllAsync,
  productosGetAllAsync,
} from "./actions/productos.js";
import { proveedorGetAllAsync } from "./actions/proveedores.js";
import { AppRouter } from "./routers/AppRouter.js";
import { store } from "./store/index.js";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  // Se obtiene el token del localStorage y se realiza la petición
  // al servidor para obtener el usuario
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(validateTokenAsync(token));
  }, [dispatch]);

  // obtener estado inicial de la aplicación
  useEffect(() => {
    //Obtiene los proveedores
    dispatch(proveedorGetAllAsync());
    dispatch(facturaGetAllAsync());
    dispatch(productosGetAllAsync());
    dispatch(categoriasGetAllAsync());
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
