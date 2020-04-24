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
    margin-bottom: 1rem;
    margin-top: 0rem;
  }
`;

const SiteInfoContent = styled.div`
  line-height: 1.8;
  padding: 4rem 1rem 8rem;
  text-align: left;

  li {
    list-style-type: disc;
    margin-left: 2rem;
  }
  /* text-align: left; */
  @media all and (min-width: 760px) {
    width: 760px;
    margin: 0 auto;
  }
`;

const SiteInfo = () => {
  return (
    <SiteInfoWrapper>
      <SiteInfoContent>
        <h2>Page Insight Tool</h2>
        <p>
          Page Insight is a minimal project created to demonstrate some of the
          <strong> core concepts of React.</strong> This project might be handy
          for those developer who are learning React. Some of the concepts
          demonstrated by this project includes:
        </p>
        <p>
          <ul>
            <li>Working with Stateful class component and maintaining state</li>
            <li>
              Using CSS in JS{" "}
              <a href="https://styled-components.com/" target="_blank">
                (styled-components)
              </a>{" "}
              in a project to avoid global scoping of CSS
            </li>
            <li>Creating reusable functional components</li>
            <li>
              Conditional Rendering in different ways (Inline conditional
              rendering, conditional rendering through functions)
            </li>
            <li>
              Using{" "}
              <a href="https://github.com/axios/axios" target="_blank">
                axios
              </a>{" "}
              as HTTP client to make API request
            </li>
            <li>Working with Google PageSpeed Insight API data </li>
            <li>Client Side Error handling</li>
          </ul>
        </p>
        <p>
          Note: This application sends the request to Google's Page Speed Insigt
          API for analysing the site performance. You can view more about the
          structure of data at{" "}
          <a
            href="https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed?hl=en-US"
            target="_blank"
          >
            Google's API Referece docs.
          </a>
        </p>
        <h3>Contributions</h3>
        <p>
          This project is opensourced on{" "}
          <a
            href="https://github.com/ajeetchaulagain/page-insight-tool"
            target="_blank"
          >
            github.
          </a>{" "}
          If you find any improvements regarding the code, please consider
          contributing by submitting a Pull Request
        </p>
      </SiteInfoContent>
    </SiteInfoWrapper>
  );
};

export default SiteInfo;
