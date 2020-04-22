// Global Component
import React from "react";
import styled from "styled-components";

// Custom Components
import MasterLayout from "./MasterLayout";
import UserInputForm from "./UserInputForm";
import SiteInfoDisplay from "./SiteResult";

// Static Assets
import "../styles/App.css";

const HeroSectionWrapper = styled.div`
  padding: 5rem 1rem 7rem;
  color: #fff;
  text-align: center;
  background: rgb(223, 28, 28);
  background: linear-gradient(
    77deg,
    rgba(223, 28, 28, 1) 0%,
    rgba(17, 28, 148, 1) 100%
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
    this.setState({ loading: true });
  };

  render() {
    return (
      <MasterLayout>
        <HeroSectionWrapper>
          <UserInputForm onStartTest={this.handleStartTest} />
        </HeroSectionWrapper>
        <SiteInfoDisplay siteInfo={this.state.siteInfo} />
      </MasterLayout>
    );
  }
}

export default App;
