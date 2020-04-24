// Global Component
import React from "react";
import styled from "styled-components";

// Custom Components
import MasterLayout from "./MasterLayout";
import UserInputForm from "./UserInputForm";
import SiteInfo from "./SiteInfo";
import SiteResult from "./SiteResult";

// Static Assets
import "../styles/App.css";

const HeroSectionWrapper = styled.div`
  color: #fff;
  text-align: center;
  line-height: 1.7;
  padding: 5rem 1rem 7rem;
  background: rgb(30, 128, 6);
  background: linear-gradient(
    77deg,
    rgba(30, 128, 6, 1) 0%,
    rgba(7, 138, 212, 1) 100%
  );

  img {
    width: 150px;
  }
  h2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

class App extends React.Component {
  state = {
    siteInfo: {}
  };

  handleStartTest = siteResult => {
    this.setState({ siteInfo: siteResult });
  };

  render() {
    const { siteInfo } = this.state;
    const isSiteInfoEmpty = Object.keys(siteInfo).length === 0 ? true : false;

    return (
      <MasterLayout>
        <HeroSectionWrapper>
          <UserInputForm onStartTest={this.handleStartTest} />
        </HeroSectionWrapper>
        {!isSiteInfoEmpty && <SiteResult siteInfo={siteInfo} />}
        {isSiteInfoEmpty && <SiteInfo />}
      </MasterLayout>
    );
  }
}

export default App;
