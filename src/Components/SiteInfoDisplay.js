import React from "react";
import styled from "styled-components";

import img from "../images/speed.png";

const TAG = "SiteInfoDisplay";

const SiteInfoSectionWrapper = styled.div`
  background-color: white;
  padding: 2rem 2rem;
  text-align: center;
`;

const SiteInfoContent = styled.div`
  @media all and (min-width: 1151px) {
    width: 1151px;
    margin: 0 auto;
  }
`;

const ResultWrapper = styled.div`
  background-color: #dcdcdc;
  border-radius: 10px;
  /* display:flex; */
  /* align-items: center; */
`;

const getDataForView = siteInfo => {
  const lighthouseResult = siteInfo.lighthouseResult;

  const finalUrl = lighthouseResult ? lighthouseResult.finalUrl : null;
  const lighthouseAudit = lighthouseResult ? lighthouseResult.audits : null;

  const performance = lighthouseResult
    ? lighthouseResult.categories.performance
    : null;

  const performanceScore = performance ? performance.score : null;
  const performanceScoreAuditRef = performance ? performance.auditRefs : null;

  return {
    finalUrl,
    lighthouseAudit,
    performanceScore,
    performanceScoreAuditRef
  };
};

const SiteInfoDisplay = ({ siteInfo }) => {
  const {
    finalUrl,
    lighthouseAudit,
    performanceScore,
    performanceScoreAuditRef
  } = getDataForView(siteInfo);

  console.log(`${TAG} - finalUrl: ${finalUrl}`);
  console.log(`${TAG} - lighthouseAudit: ${lighthouseAudit}`);
  console.log(`${TAG} - performanceScore: ${performanceScore}`);
  console.log(`${TAG} - performanceScoreAuditRef: ${performanceScoreAuditRef}`);

  return (
    <SiteInfoSectionWrapper>
      <SiteInfoContent>
        <h3>Requested Url:{finalUrl}</h3>
        <ResultWrapper>
          <h3>Performance Score for requested url: {performanceScore}</h3>
          <div className="performance-score">0.99</div>
          <div className="performance-ref-audit">
            <p>
              The performance is calculated based on following audit reference
            </p>
            <ul>
              <li>First Contentful pain</li>
              <li>Content....</li>
            </ul>
          </div>
        </ResultWrapper>
      </SiteInfoContent>
    </SiteInfoSectionWrapper>
  );
};

export default SiteInfoDisplay;
