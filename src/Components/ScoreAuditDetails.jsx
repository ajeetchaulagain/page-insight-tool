import React from "react";
import ReactMarkdown from "react-markdown";

import styled from "styled-components";

const ScoreAuditDetailsWrapper = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: center;

  .score-audit-content {
    padding: 0.4rem 0;
    width: 50%;
    color: #fff;
    background: rgb(30, 128, 6);
    background: linear-gradient(
      77deg,
      rgba(30, 128, 6, 1) 0%,
      rgba(7, 138, 212, 1) 100%
    );
    border-radius: 10px;
    margin-right: 1rem;
  }

  .audit-image-wrapper {
    width: 30%;
  }
  img {
    border: 4px solid #e6e7f3;
    width: 100%;
    border-radius: 10px;
  }

  .details {
    /* margin-top: 1rem; */
    padding: 1rem;
    color: #000;
    text-align: left;
    background-color: #e6e7f3;
    margin-top: 0.5rem;
  }
`;

const ScoreAuditDetails = ({ screenshot, auditsDetails }) => {
  return (
    <ScoreAuditDetailsWrapper>
      <div className="score-audit-content">
        <h2>Performance Metrix</h2>
        <p>The performance is calculated based on following audit reference</p>
        <div>
          {auditsDetails &&
            auditsDetails.map(audit => {
              return (
                <div className="details">
                  <h3>{audit.title}</h3>
                  <p>
                    <ReactMarkdown source={audit.description} />
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="audit-image-wrapper">
        <img src={screenshot} />
      </div>
    </ScoreAuditDetailsWrapper>
  );
};

export default ScoreAuditDetails;
