import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../actions/ui";
import Add from "../icons/Add";
import { changeSubPage, showFormNewCategoriaAction, showFormNewProductoAction } from "../actions/productos";
import { CategoriasSubPage } from "../components/CategoriasSubPage";
import { ProductosSubPage } from "../components/ProductosSubPage";

const Wrapper = styled.div`
  margin: 88px 24px 74px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Options = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    border: 1px solid white;
    width: 80px;
    height: 30px;
    outline: none;
  }
`;

const AddButton = styled(Add)`
  right: 0;
  bottom: 0;
  position: fixed;
  margin-bottom: 74px;
  margin-right: 24px;
`;

export default function Productos(props) {
  // dispatch de redux
  const dispatch = useDispatch();
  const {subPage} = useSelector(state => state.productos);
  
  // Cambiar el nombre de la página en el Head (Componenten Layout)
  useEffect(() => {
    dispatch(changePage("PRODUCTOS"));
  }, [dispatch]);

  const handleButtonAdd = () => {
    if(subPage === 'productos') {
      dispatch(showFormNewProductoAction(true));
    } else if(subPage === "categorias") {
      dispatch(showFormNewCategoriaAction(true));
    }
    
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      <Options>
        <button
          onClick={() => dispatch(changeSubPage('productos'))}
          style={{
            backgroundColor: subPage === 'productos' ? "#fff" : "#000",
            color: subPage === 'productos' ? "#000" : "#fff",
          }}
        >
          Productos
        </button>
        <button
          onClick={() => dispatch(changeSubPage('categorias'))}
          style={{
            backgroundColor: subPage === 'categorias' ? "#fff" : "#000",
            color: subPage === 'categorias' ? "#000" : "#fff",
          }}
        >
          Categorías
        </button>
      </Options>
      {subPage === 'productos' ? <ProductosSubPage /> : <CategoriasSubPage />}
      <AddButton onClick={handleButtonAdd} />
    </Wrapper>
  );
}
