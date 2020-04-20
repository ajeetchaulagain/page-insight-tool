import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: green;
`;

// Master layer includes header and footer those are common on all pages
const MasterLayout = props => {
  return (
    <PageWrapper>
      <Header />
      {props.children}
      <Footer />
    </PageWrapper>
  );
};

export default MasterLayout;
