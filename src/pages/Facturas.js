import React, {useEffect} from 'react'

export default function Facturas(props) {
    const {setTitlePage} = props;
    // Cambiar el nombre de la página en el Head (Componenten Layout)
    useEffect(() => {
        setTitlePage('FACTURAS');
    }, [setTitlePage]);

    
    return (
        <div>
            <h1>Facturas</h1>
        </div>
    )
}
