import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Proveedor from '../components/Proveedor';
import Add from '../icons/Add';
import { useDispatch } from 'react-redux';
import { cambioPagina } from '../actions/ui';

const Wrapper = styled.div`
    margin: 88px 24px 74px 24px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const AddIcon = styled(Add)`
    right: 0;
    bottom: 0;
    position: fixed;
    margin-bottom: 74px;
    margin-right: 24px;
`;

export default function Proveedores(props) {
    // dispatch de redux
  const dispatch = useDispatch();

  // Cambiar el nombre de la página en el Head (Componenten Layout)
  useEffect(() => {
    dispatch(cambioPagina("PROVEEDORES"));
  }, [dispatch])

    return (
        <Wrapper>
            <Proveedor />
            <Proveedor />
            <Proveedor />
            <Proveedor />
            <Proveedor />
            <Proveedor />
            <Proveedor />
            <AddIcon />
        </Wrapper>
    )
}
