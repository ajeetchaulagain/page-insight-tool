import React from "react";
import styled from "styled-components";

const ScoreAuditDetailsWrapper = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: flex-end;

  img {
    border: 10px double black;
    width: 250px;
  }
`;

const ScoreAuditDetails = ({ screenshot, auditsDetails }) => {
  return (
    <ScoreAuditDetailsWrapper>
      <div className="score-audit-content">
        <h2>Performance Metrix</h2>
        <p>The performance is calculated based on following audit reference</p>
        <ul>
          {auditsDetails &&
            auditsDetails.map(audit => {
              return (
                <div>
                  <p>Title: {audit.title}</p>
                  <p>Title: {audit.description}</p>
                  <p>Title: {audit.id}</p>
                </div>
              );
            })}
        </ul>
      </div>
      <div className="audit-image-wrapper">
        <img src={screenshot} />
      </div>
    </ScoreAuditDetailsWrapper>
  );
};

export default ScoreAuditDetails;
