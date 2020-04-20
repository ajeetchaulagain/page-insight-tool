// Global Component
import React from "react";
import styled from "styled-components";

// Custom Components
import MasterLayout from "./MasterLayout";
import UserInputForm from "./UserInputForm";
import SiteInfoDisplay from "./SiteInfoDisplay";
import Loading from "./Loading";

// Static Assets
import "./App.css";
import heroBackgroundImage from "../images/hero-background.jpg";

const HeroSectionWrapper = styled.div`
  padding: 12rem 1rem 8rem;
  color: #fff;
  text-align: center;
  /* background-image: url(${heroBackgroundImage}); */

  background-color:#0C154A;
`;

class App extends React.Component {
  state = {
    siteInfo: {
      websiteUrl: "https://ajeetchaulagain.com"
    },
    loading: false
  };

  updateUser = loading => {
    this.setState({ loading: loading });
  };

  // Function for conditional rendering of component in hero section
  renderHeroComponent = () => {
    if (this.state.loading) return <Loading />;
    return <UserInputForm onSubmit={this.updateUser} />;
  };

  render() {
    return (
      <MasterLayout>
        {console.log("App-Component - loading: ", this.state.loading)}
        <HeroSectionWrapper>{this.renderHeroComponent()}</HeroSectionWrapper>
        <SiteInfoDisplay siteInfo={this.state.siteInfo} />
      </MasterLayout>
    );
  }
}

export default App;
