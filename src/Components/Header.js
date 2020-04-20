import React from 'react';
import styled from 'styled-components';


const HeaderWrapper = styled.div`
    width:100%;
    background-color:#9E91F2;
    padding:1rem;
    color:#000;
    font-size:1rem;
    font-weight:600;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const LogoTitle = styled.h2`
    font-size:2rem;
`;

const NavList =  styled.ul`
    display:flex;
    list-style-type:none;
    li{
        margin:1rem;
        :first-child{
            margin-left:0;
        }
        :last-child{
            margin-left:0;
        }
    }
`;


const Header = () => {

    return (
        <HeaderWrapper>
            <LogoTitle>Page Insight Tool</LogoTitle>

            <NavList>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Features</li>
            </NavList>

        </HeaderWrapper>
    );
}

export default Header;

