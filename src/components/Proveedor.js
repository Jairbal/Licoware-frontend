import React from 'react';
import styled from '@emotion/styled';
import ContactoProveedor from './ContactoProveedor';
import Right from '../icons/Right';

const Wrapper = styled.div`
    margin-top: 24px;
    border-bottom: 1px solid #fff;
    position: relative;
`;

const Title = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #fff;
`;

const SecondaryText = styled.p`
    color: #9F9B9B;
    font-size: 12px;
`;

const RightIcon = styled(Right)`
    position: absolute;
    top: 0;
    right: 0;
`;

export default function Proveedor() {
    return (
        <Wrapper>
            <Title>Dilice</Title>
            <SecondaryText>Urbanización IERAC 69</SecondaryText>
            <SecondaryText>022760787</SecondaryText>
            <ContactoProveedor name="Benito Celi" phone="09812456390" post="Gerente"/>
            <ContactoProveedor name="Benito Celi" phone="09812456390" post="Gerente"/>
            <RightIcon />
        </Wrapper>
    )
}
