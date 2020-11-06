import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../actions/ui";

export default function Home(props) {
  // dispatch de redux
  const dispatch = useDispatch();

  // Cambiar el nombre de la página en el Head (Componenten Layout)
  useEffect(() => {
    dispatch(changePage("BIENVENIDO"));
  }, [dispatch])

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
