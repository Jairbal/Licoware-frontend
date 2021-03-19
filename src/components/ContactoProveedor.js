import React from 'react';
import { Wrapper, Name, Post, Phone} from '../componentsStyles/ContactoProveedor';

export default function ContactoProveedor({contacto}) {
    const {nombre, telefono, cargo} = contacto;
    return (
        
        <Wrapper>
            <Name>{nombre}</Name>
            <Post>{cargo}</Post>
            <Phone>{telefono}</Phone>
        </Wrapper>
    )
}
