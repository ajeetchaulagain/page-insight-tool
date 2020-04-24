import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// MasterLayout includes header and footer
const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MasterLayout;
