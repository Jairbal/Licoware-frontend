import React, {useEffect} from 'react'

export default function Proveedores(props) {
    const {setTitlePage} = props;
    // Cambiar el nombre de la página en el Head (Componenten Layout)
    useEffect(() => {
        setTitlePage('PROVEEDORES');
    }, [setTitlePage]);

    return (
        <div>
            <h1>Proveedores</h1>
        </div>
    )
}
