import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    margin: 10px;
    position: relative;
`;

const Name = styled.p`
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
`;

const Phone = styled.p`
    color: #9F9B9B;
    font-size: 12px;
`;

const Post = styled.p`
    color: #fff;
    font-size: 12px;
    position: absolute;
    right: 0;
    top: 0;
`;

export default function ContactoProveedor({name, phone, post}) {
    return (
        <Wrapper>
            <Name>{name}</Name>
            <Post>{post}</Post>
            <Phone>{phone}</Phone>
        </Wrapper>
    )
}
