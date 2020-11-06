import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { validateTokenAsync } from "./actions/auth.js";
import { LoadingScreen } from "./components/LoadingScreen.js";
import { AppRouter } from "./routers/AppRouter.js";
import { store } from "./store/index.js";

function App() {
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  // Se obtiene el token del localStorage y se realiza la petición
  // al servidor para obtener el usuario
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(validateTokenAsync(token));
  }, [dispatch]);

  return (
    <>
      <Provider store={store}>
        {loading ? <LoadingScreen /> : <AppRouter />}
      </Provider>
    </>
  );
}

export default App;
