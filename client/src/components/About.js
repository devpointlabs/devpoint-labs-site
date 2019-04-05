import React from "react";
import Reviews from './Reviews';
import AboutDPL from './AboutDPL'
import DPLExperience from "./DPLExperience";

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
      </>
    );
  }
}

export default About;
