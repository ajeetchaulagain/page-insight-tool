import React from "react";
import styled from "styled-components";

const ScoreAuditDetailsWrapper = styled.div`
  /* background-color: red; */
  margin-top: 2rem;
  /* border-top:1px solid black; */

  img {
    border: 10px double black;
  }
`;

const ScoreAuditDetails = ({ screenshot }) => {
  return (
    <ScoreAuditDetailsWrapper>
      <img src={screenshot} />
      <h2>Here goes the score audit details</h2>
      <div className="performance-ref-audit">
        <p>The performance is calculated based on following audit reference</p>
        <ul>
          <li>First Contentful pain</li>
          <li>Content....</li>
        </ul>
      </div>
    </ScoreAuditDetailsWrapper>
  );
};

export default ScoreAuditDetails;
