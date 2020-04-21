import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 0.2rem 1rem;
  color: #48484a;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const HeaderContent = styled.div`
  /* display: flex; */
  @media all and (min-width: 599px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media all and (min-width: 1151px) {
    width: 1151px;
    margin: 0 auto;
  }
`;

const LogoTitle = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  li {
    margin: 1rem;
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-left: 0;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoTitle>Page Insight Tool</LogoTitle>
        <NavList>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Features</li>
        </NavList>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
