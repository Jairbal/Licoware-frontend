import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import Entrar from "../pages/Entrar";
import Facturas from "../pages/Facturas";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Proveedores from "../pages/Proveedores";
import Layout from "../components/ui/layout/Layout";
import { useSelector } from "react-redux";
import { LoadingScreen } from "../components/LoadingScreen";
import Proveedor from "../pages/Proveedor";

export const AppRouter = () => {
  const loadingApp = useSelector((state) => state.ui.loadingApp);

  // verifica si se encuentra authenticado mediante el stado de redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      {loadingApp ? (
        <LoadingScreen />
      ) : (
        <Router>
          <Layout>
            <Switch>
              <PublicRouter
                exact
                path="/entrar"
                component={Entrar}
                isAuthenticated={isAuthenticated}
              />
              <PrivateRouter
                exact
                path="/"
                component={Home}
                isAuthenticated={isAuthenticated}
              />
              <PrivateRouter
                exact
                path="/facturas"
                component={Facturas}
                isAuthenticated={isAuthenticated}
              />
              <PrivateRouter
                exact
                path="/productos"
                component={Productos}
                isAuthenticated={isAuthenticated}
              />
              <PrivateRouter
                exact
                path="/proveedores"
                component={Proveedores}
                isAuthenticated={isAuthenticated}
              />
              <PrivateRouter
                exact
                path="/proveedores/:_id"
                component={Proveedor}
                isAuthenticated={isAuthenticated}
              />
            </Switch>
          </Layout>
        </Router>
      )}
    </>
  );
};
