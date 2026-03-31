import React from "react";
import PropTypes from "prop-types";
import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";

export default function WebLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

WebLayout.propTypes = {
  children: PropTypes.node,
};
