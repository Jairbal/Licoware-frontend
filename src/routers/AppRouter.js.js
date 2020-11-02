import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import Entrar from "../pages/Entrar";
import Facturas from "../pages/Facturas";
import Home from "../pages/Home";
import Inventario from "../pages/Inventario";
import Proveedores from "../pages/Proveedores";
import Layout from "../components/Layout";

export const AppRouter = () => {
    const isAuthenticated = false;
  return (
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
            path="/inventario"
            component={Inventario}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRouter
            exact
            path="/proveedores"
            component={Proveedores}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </Layout>
    </Router>
  );
};
