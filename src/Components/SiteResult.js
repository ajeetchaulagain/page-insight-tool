import React from "react";
import styled from "styled-components";

import ScorePercantile from "./ScorePercantile";
import ScoreAuditDetails from "./ScoreAuditDetails";

const TAG = "SiteResult";

const SiteResultWrapper = styled.div`
  background-color: white;
  padding: 2rem 2rem;
  text-align: center;
`;

const SiteResultContent = styled.div`
  .result-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 800;
    display: inline-block;
    /* text-decoration:underline; */
    /* text-transform: uppercase; */
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

  // Audit Ref with weight>0 only contributes to performance.
  // Retrieving auditRef that has weight
  const auditRefsWithWeight = performanceScoreAuditRef.filter(
    auditRef => auditRef.weight > 0
  );

  const auditRefsWithWeightDetails = auditRefsWithWeight.map(
    audit => lighthouseAudit[audit.id]
  );

  return {
    finalUrl,
    lighthouseAudit,
    performanceScore,
    performanceScoreAuditRef,
    screenshot,
    auditRefsWithWeight,
    auditRefsWithWeightDetails
  };
};

const SiteResult = ({ siteInfo }) => {
  const {
    finalUrl,
    lighthouseAudit,
    screenshot,
    performanceScore,
    performanceScoreAuditRef,
    auditRefsWithWeight,
    auditRefsWithWeightDetails
  } = getDataForView(siteInfo);

  for (let i = 0; i < performanceScoreAuditRef.length; i++) {
    console.log("Array Object", performanceScoreAuditRef[i]);
  }

  for (let i = 0; i < auditRefsWithWeightDetails.length; i++) {
    console.log("Array Object Details", auditRefsWithWeightDetails[i]);
  }

  console.log(
    "Type of performanceScoreAuditRef",
    typeof performanceScoreAuditRef
  );

  console.log(
    "Type of auditReswithweightdetails",
    typeof auditRefsWithWeightDetails
  );

  console.log("Type of auditReswithweight", typeof auditRefsWithWeight);

  console.dir(
    `${TAG} - auditRefsWithWeightDetails: ${auditRefsWithWeightDetails}`
  );
  console.log(`${TAG} - auditRefWithWeight: ${auditRefsWithWeight}`);
  console.log(`${TAG} - finalUrl: ${finalUrl}`);
  console.log(`${TAG} - lighthouseAudit: ${lighthouseAudit}`);
  console.log(`${TAG} - performanceScore: ${performanceScore}`);
  console.log(`${TAG} - performanceScoreAuditRef: ${performanceScoreAuditRef}`);
  console.log(`${TAG} - screenshot: ${screenshot}`);

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
