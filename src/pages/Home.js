import React, {useEffect} from 'react';


export default function Home(props) {
    const {setTitlePage} = props;
    // Cambiar el nombre de la página en el Head (Componenten Layout)
    useEffect(() => {
        setTitlePage('BIENVENIDO');
    }, [setTitlePage]);

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
