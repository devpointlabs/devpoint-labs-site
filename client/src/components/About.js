import React from "react";
import Reviews from "./Reviews";
import AboutDPL from "./AboutDPL";
import DPLExperience from "./DPLExperience";
import SubscribeForm from "./SubscribeForm";

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
        <SubscribeForm />
      </>
    );
  }
}

export default About;
