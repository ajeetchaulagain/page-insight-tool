import React from "react";
import styled from "styled-components";

const SiteInfoSectionWrapper = styled.div`
  background-color: white;
  padding: 2rem 2rem;
  text-align: center;
`;

const SiteInfoDisplay = props => {
  return (
    <SiteInfoSectionWrapper>
      <h1>Site Information</h1>
      <p>View your site information below:</p>
    </SiteInfoSectionWrapper>
  );
};

export default SiteInfoDisplay;
