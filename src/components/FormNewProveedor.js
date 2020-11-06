import React from 'react';

import Form from './Form';
import Input from './Input';
import styled from '@emotion/styled';
import { useForm } from '../hooks/useForm';
import { PrimaryButton } from './ui/PrimaryButton';
import { useDispatch } from 'react-redux';
import { showNewFormAction } from '../actions/proveedor';

const CloseButton = styled.button`
    background-color: transparent;
    color: white;
    width: auto;
    border: none;
    text-align: right;
    right: 0;
    outline: none;
`;

export const FormNewProveedor = () => {

    const dispatch = useDispatch();
    
    const [formData, handleFormData] = useForm({
        nombre: "", 
        direccion: "",
        telefono: "",
    })

    const { nombre, direccion, telefono} = formData;

    const handleCloseForm = () => {
        dispatch(showNewFormAction(false))
    }

    return (
        <Form className="animate__animated animate__backInUp">
            <CloseButton type="button" onClick={handleCloseForm}>x</CloseButton>
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
