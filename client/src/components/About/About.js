import React from "react";
import Reviews from "../Reviews/Reviews";
import AboutDPL from "./AboutDPL";
import Instagram from "./Instagram";
import Footer from "../MAIN/Footer";

class About extends React.Component {
  render() {
    return (
      <>
        <AboutDPL />
        <Reviews />
        <Instagram />
        <Footer />
      </>
    );
  }
}

export default About;
