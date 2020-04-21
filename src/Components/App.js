// Global Component
import React from "react";
import styled from "styled-components";

// Custom Components
import MasterLayout from "./MasterLayout";
import UserInputForm from "./UserInputForm";
import SiteInfoDisplay from "./SiteInfoDisplay";
import Loading from "./Loading";
import speedIcon from "../images/speed.png";

// Static Assets
import "./App.css";
import { thisExpression } from "@babel/types";

const HeroSectionWrapper = styled.div`
  padding: 3rem 1rem 5rem;
  color: #fff;
  text-align: center;
  background: rgb(223, 28, 28);
  background: linear-gradient(
    77deg,
    rgba(223, 28, 28, 1) 0%,
    rgba(17, 28, 148, 1) 100%
  );
  /* background-color: #734bec; */
  line-height: 1.8;

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
          <img src={speedIcon} />
          <h2>Monitor your site speed</h2>
          <p>
            Enter a URL of your site to analyse its performance and get
            optimisation recommendation.
          </p>
          <UserInputForm onStartTest={this.handleStartTest} />
        </HeroSectionWrapper>

        <SiteInfoDisplay siteInfo={this.state.siteInfo} />
      </MasterLayout>
    );
  }
}

export default App;
