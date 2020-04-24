import React from "react";
import styled from "styled-components";

import { FaGithub, FaHeart } from "react-icons/fa";
import GitHubButton from "react-github-btn";

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
  p.footer-paragraph {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    li {
      margin-left: 1rem;
    }
  }

  @media all and (min-width: 1151px) {
    width: 1151px;
    margin: 0 auto;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p className="footer-paragraph">
          Made with &nbsp; <FaHeart style={{ color: "red" }} /> &nbsp; by Ajeet
          and is open sourced on &nbsp; <FaGithub />
        </p>
        <ul>
          <li>
            <GitHubButton
              href="https://github.com/ajeetchaulagain"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-size="large"
              aria-label="Follow @ajeetchaulagain on GitHub"
            >
              @ajeetchaulagain
            </GitHubButton>
          </li>
          <li>
            <GitHubButton
              href="https://github.com/ajeetchaulagain/page-insight-tool/"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-icon="octicon-eye"
              data-size="large"
              aria-label="Watch ajeetchaulagain/page-insight-tool on GitHub"
            >
              Source Code
            </GitHubButton>
          </li>
        </ul>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
