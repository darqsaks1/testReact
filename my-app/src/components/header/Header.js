import React from 'react';
import styled from "styled-components";

const HeaderBlock = styled.div` 
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 70px;
    background-color: white;
    border-bottom: 1px solid black;
`;

const MainButton = styled.a` 
    font-size: 30px;
    padding: 10px;
    color: black;
    font-family: 'Oswald', sans-serif; 
    text-decoration: none;
`;

const Header = () => {
    return (
        <HeaderBlock>
            <MainButton href = '/'>
                Главная
            </MainButton>
            <MainButton href = '/employees'>
                Работники
            </MainButton>
        </HeaderBlock>
    );
};

export default Header;