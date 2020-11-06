import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changePage } from '../actions/ui';

export default function Facturas(props) {
    // dispatch de redux
  const dispatch = useDispatch();

  // Cambiar el nombre de la página en el Head (Componenten Layout)
 useEffect(() => {
    dispatch(changePage("FACTURAS"));
 }, [dispatch])

    
    return (
        <div>
            <h1>Facturas</h1>
        </div>
    )
}
