import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";



const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 0.2rem 1rem;
  font-size: 1.1rem;
  font-weight: 800;
  text-transform: uppercase;
`;

const HeaderContent = styled.div`
  a {
    color: #3a3a3a;
    text-decoration: none;
    :hover {
      /* text-decoration: underline; */
      color: #cd8124;
    }
  }
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

const LogoTitle = styled.a`
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;

  list-style-type: none;
  li {
    margin: 1rem;
    :first-child {
      margin-left: 0;
    }
    :last-child {
      a {
        background-color: #3a3a3a;
        color: white;
        padding: 0.3rem 1rem;
        border-radius: 5px;
        display: flex;
        align-items: center;
        text-transform: none;
        :hover {
          background-color: #6d6d6c;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoTitle href="/">Page Insight Tool</LogoTitle>
        <NavList>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a
              href="https://github.com/ajeetchaulagain/page-insight-tool"
              target="_blank"
            >
              View on &nbsp;
              <FaGithub />
            </a>
          </li>
        </NavList>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
