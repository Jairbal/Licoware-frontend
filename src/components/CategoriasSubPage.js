import React from "react";
import { useSelector } from "react-redux";
import { FormCategoria } from "./ui/forms/FormCategoria";
import {Categoria} from '../componentsStyles/CategoriaSubPage';

export const CategoriasSubPage = () => {
  const { showFormNewCategoria, categorias } = useSelector(
    (state) => state.productos
  );

  return (
    <>
      {categorias.map((categoria) => (
        <Categoria key={categoria._id}>► {categoria.nombre}</Categoria>
      ))}
      {showFormNewCategoria && <FormCategoria />}
    </>
  );
};
