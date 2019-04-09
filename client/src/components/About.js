import React from "react";
import Reviews from './Reviews';
import AboutDPL from './AboutDPL'
import DPLExperience from "./DPLExperience";
import Instagram from "./Instagram";

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
      </>
    );
  }
}

export default About;
