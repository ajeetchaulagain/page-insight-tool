import React from "react";
import styled from "styled-components";

const SiteInfoWrapper = styled.div`
  /* background-color: red; */
  padding: 0.2rem 1rem;
  min-height: 20rem;
  font-size: 1.1rem;

  h2 {
    font-size: 2.5rem;
    /* margin-bottom: 1rem; */
  }
  p {
    margin-bottom: 0.5rem;
  }
`;

const SiteInfoContent = styled.div`
  line-height: 1.8;
  padding: 3rem 0.5rem;
  text-align: center;
  /* text-align: left; */
  @media all and (min-width: 900px) {
    width: 900px;
    margin: 0 auto;
  }
`;

const SiteInfo = () => {
  return (
    <SiteInfoWrapper>
      <SiteInfoContent>
        <h2>Page Insight Tool</h2>
        <p>
          <strong>
            A tool to measure the performance of your website based on the
            Lighthouse report.
          </strong>
        </p>
        <p>
          <strong>(Note:</strong> This application sends the request to Google's
          Page Speed Insigt API for analysing the site performance.
        </p>
        <p>
          This project is opensourced on{" "}
          <a
            href="https://github.com/ajeetchaulagain/page-insight-tool"
            target="_blank"
          >
            github.
          </a>{" "}
          Read more about the project here.
        </p>
      </SiteInfoContent>
    </SiteInfoWrapper>
  );
};

export default SiteInfo;
