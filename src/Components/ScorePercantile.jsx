import React from "react";
import styled from "styled-components";
import "../styles/circle.css";

const ScorePercantileWrapper = styled.div`
  border-radius: 30px;

  .score-category {
    margin-top: 1rem;
    .label {
      display: inline-block;
      padding: 0rem 1rem;
      line-height: 1.3;
      text-align: center;
      font-size: 0.8rem;

      .label-circle {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }
  }
`;

const ScorePercantile = ({ score }) => {
  score = score * 100;

  const generateLabel = (label, color) => {
    return (
      <div className="label">
        <div className="label-circle" style={{ backgroundColor: color }}></div>
        <p>{label}</p>
      </div>
    );
  };

  const getColor = () => {
    if (score >= 0 && score <= 49) return "red";
    if (score >= 50 && score < 90) return "orange";
    return "green";
  };

  return (
    <ScorePercantileWrapper>
      <h3>Performance Score for requested url: {score}</h3>
      <div className="c100 p90 center">
        <span>{score}</span>
        <div className="slice">
          <div className="bar" style={{ borderColor: `${getColor()}` }}></div>
          <div className="fill" style={{ borderColor: `${getColor()}` }}></div>
        </div>
      </div>
      <div className="score-category">
        {generateLabel("Slow", "red")}
        {generateLabel("Average", "orange")}
        {generateLabel("Fast", "green")}
        <p>See more about performance score at google</p>
      </div>
    </ScorePercantileWrapper>
  );
};

export default ScorePercantile;
