import React from 'react'
import styled from '@emotion/styled';
import Add from '../../icons/Add';

const Button = styled(Add)`
    right: 0;
    bottom: 0;
    position: fixed;
    margin-bottom: 74px;
    margin-right: 24px;
    
`;

export const AddButton = ({handleOnClick}) => {
    return (
        <Button onClick={handleOnClick}/>
    )
}
