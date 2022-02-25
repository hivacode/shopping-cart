import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import Slider from "../components/Slider";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <Slider/> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
