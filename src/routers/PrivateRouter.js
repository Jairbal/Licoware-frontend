import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import Nav from "../components/Nav";

export const PrivateRouter = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <>
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/entrar" />
      }
    />
    <Nav />
    </>
  );
};

PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
