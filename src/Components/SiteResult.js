import React from "react";
import styled from "styled-components";

import ScorePercantile from "./ScorePercantile";
import ScoreAuditDetails from "./ScoreAuditDetails";

import img from "../images/speed.png";

const TAG = "SiteResult";

const SiteResultWrapper = styled.div`
  background-color: white;
  padding: 2rem 2rem;
  text-align: center;
`;

const SiteResultContent = styled.div`
  .result-title {
    font-size: 3rem;
    font-weight: 800;
    display: inline-block;
    text-transform: uppercase;
  }
  @media all and (min-width: 1151px) {
    width: 1151px;
    margin: 0 auto;
  }
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

const SiteResult = ({ siteInfo }) => {
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
    <SiteResultWrapper>
      <SiteResultContent>
        <h2 className="result-title">Result</h2>
        <p>URL Analysed: {finalUrl}</p>
        <ScorePercantile score={performanceScore} />
        <ScoreAuditDetails />
      </SiteResultContent>
    </SiteResultWrapper>
  );
};

export default SiteResult;
