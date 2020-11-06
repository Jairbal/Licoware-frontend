import React from 'react'
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
    opacity: 0.3;
    width: 100%;
    height: 50px;
    margin-top: 20px;
    background-color: #8B0023;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`

const Message = styled.p`
    color: white;
    font-size: 17px;
`;

export const ErrorMessage = () => {
    
    const {message} = useSelector(state => state.ui.error)

    return (
        <Wrapper className="animate__animated animate__flash">
            <Message>{message}</Message>
        </Wrapper>
    )
}
