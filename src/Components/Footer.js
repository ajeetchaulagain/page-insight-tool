import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #383839;
  color: white;
  padding: 1rem;
  width: 100%;
  position: relative;
`;

const FooterContent = styled.div`
  text-align: center;
  padding: 2rem;

  @media all and (min-width: 1151px) {
    width: 1151px;
    margin: 0 auto;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>Copyright 2020. Ajeet Chaulagain</p>
        <p>Made with Love and is Open sources on Github</p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
