import React, {useEffect} from 'react'

export default function Inventario(props) {
    const {setTitlePage} = props;
    // Cambiar el nombre de la página en el Head (Componenten Layout)
    useEffect(() => {
        setTitlePage('INVENTARIO');
    }, [setTitlePage]);
    return (
        <div>
            <h1>Inventario</h1>
        </div>
    )
}
