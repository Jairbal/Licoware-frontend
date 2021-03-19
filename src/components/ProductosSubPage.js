import React from 'react'
import { useSelector } from 'react-redux';
import { Producto } from './Producto';
import { FormProducto } from './ui/forms/FormProducto';

export const ProductosSubPage = () => {
    const { showFormNewProducto, productos } = useSelector(
        (state) => state.productos
      );
    
    return (
        <>
          {showFormNewProducto && <FormProducto />}  
          {productos.map(producto => (
            <Producto key={producto._id} producto={producto} />
          ))}
        </>
    )
}
