import React from 'react';
import styled from 'styled-components';



const FooterWrapper = styled.div`
    background-color:#000;
    color:white;
    padding:1rem;
`;

const Footer = () =>{

    return (
        <FooterWrapper>
            <h2>This is the footer sections</h2>
        </FooterWrapper>
    );
}

export default Footer;