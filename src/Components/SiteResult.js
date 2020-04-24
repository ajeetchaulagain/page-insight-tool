import React from "react";
import styled from "styled-components";

import ScorePercantile from "./ScorePercantile";
import ScoreAuditDetails from "./ScoreAuditDetails";

const TAG = "SiteResult";

const SiteResultWrapper = styled.div`
  background-color: white;
  padding: 3rem 2rem;
  text-align: center;
`;

const SiteResultContent = styled.div`
  .result-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 800;
    display: inline-block;
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

  const screenshot = lighthouseAudit
    ? lighthouseAudit["final-screenshot"].details.data
    : null;

  const performance = lighthouseResult
    ? lighthouseResult.categories.performance
    : null;

  const performanceScore = performance ? performance.score : null;
  const performanceScoreAuditRef = performance ? performance.auditRefs : null;

  const auditRefsWithWeight = performanceScoreAuditRef.filter(
    auditRef => auditRef.weight > 0
  );

  const auditRefsWithWeightDetails = auditRefsWithWeight.map(
    audit => lighthouseAudit[audit.id]
  );

  return {
    finalUrl,
    performanceScore,
    screenshot,
    auditRefsWithWeightDetails
  };
};

const SiteResult = ({ siteInfo }) => {
  const {
    finalUrl,
    screenshot,
    performanceScore,
    auditRefsWithWeightDetails
  } = getDataForView(siteInfo);

  return (
    <SiteResultWrapper>
      <SiteResultContent>
        <h2 className="result-title">Result</h2>
        <p>
          <strong>URL Analysed:</strong> {finalUrl}
        </p>
        <ScorePercantile score={performanceScore} />
        <ScoreAuditDetails
          screenshot={screenshot}
          auditsDetails={auditRefsWithWeightDetails}
        />
      </SiteResultContent>
    </SiteResultWrapper>
  );
};

export default SiteResult;
