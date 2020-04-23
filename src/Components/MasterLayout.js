import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

// Master layer includes header and footer those are common on all pages
const MasterLayout = props => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default MasterLayout;
