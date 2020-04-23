// Global Component
import React from "react";
import styled from "styled-components";

// Custom Components
import MasterLayout from "./MasterLayout";
import UserInputForm from "./UserInputForm";

// Static Assets
import "../styles/App.css";
import SiteResult from "./SiteResult";

const HeroSectionWrapper = styled.div`
  padding: 5rem 1rem 7rem;
  color: #fff;
  text-align: center;
  /* background-color: #732c02; */
  

  background: rgb(30, 128, 6);
  background: linear-gradient(
    77deg,
    rgba(30, 128, 6, 1) 0%,
    rgba(7, 138, 212, 1) 100%
  );

  line-height: 1.7;

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
    console.log("APP.JS - siteResult:", siteResult);
    this.setState({ siteInfo: siteResult });
  };

  render() {
    return (
      <MasterLayout>
        <HeroSectionWrapper>
          <UserInputForm onStartTest={this.handleStartTest} />
        </HeroSectionWrapper>
        {!(Object.keys(this.state.siteInfo).length === 0) && (
          <SiteResult siteInfo={this.state.siteInfo} />
        )}
      </MasterLayout>
    );
  }
}

export default App;
