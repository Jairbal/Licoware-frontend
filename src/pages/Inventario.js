import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { cambioPagina } from '../actions/ui';

export default function Inventario(props) {
    // dispatch de redux
  const dispatch = useDispatch();

  // Cambiar el nombre de la página en el Head (Componenten Layout)
  useEffect(() => {
    dispatch(cambioPagina("INVENTARIO"));
  }, [dispatch])

    return (
        <div>
            <h1>Inventario</h1>
        </div>
    )
}
