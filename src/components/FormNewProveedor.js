import React from 'react';

import Form from './Form';
import Input from './Input';
import { useForm } from '../hooks/useForm';
import { PrimaryButton } from './ui/PrimaryButton';

export const FormNewProveedor = () => {
    
    const [formData, handleFormData] = useForm({
        nombre: "", 
        direccion: "",
        telefono: "",
    })

    const { nombre, direccion, telefono} = formData;

    return (
        <Form>
            <Input 
                name='nombre' 
                label="Nombre"
                value={nombre} 
                handleChange={handleFormData}
            />
            <Input 
                name='direccion' 
                label="Dirección"
                value={direccion} 
                handleChange={handleFormData}
            />
            <Input 
                name='telefono' 
                label="Telefono"
                type='number'
                value={telefono} 
                handleChange={handleFormData}
            />
            <PrimaryButton value='Guardar' />
        </Form>
    )
}
