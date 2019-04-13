import React from "react";
import Reviews from "../Reviews/Reviews";
import AboutDPL from "./AboutDPL";
import DPLExperience from "./DPLExperience";
import Instagram from "./Instagram";
import Footer from "../MAIN/Footer";

class About extends React.Component {
  render() {
    return (
      <>
        <AboutDPL />
        <br />
        <Reviews />
        <br />
        <br />
        <DPLExperience />
        <br />
        <br />
        <Instagram />
        <Footer />
      </>
    );
  }
}

export default About;
