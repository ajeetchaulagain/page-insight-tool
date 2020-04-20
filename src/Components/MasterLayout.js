import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: green;
`;

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
