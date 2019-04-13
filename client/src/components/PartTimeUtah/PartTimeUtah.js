import React from "react";
import TopimagesUtah from "./TopimagesUtah";
import ScheduleUtah from "./ScheduleUtah";
import HousingUtah from "./HousingUtah";
import CostsUtah from "./CostsUtah";
import Footer from "../MAIN/Footer";

class PartTimeUTah extends React.Component {
  render() {
    return (
      <>
        <TopimagesUtah />
        <ScheduleUtah />
        <CostsUtah />
        <Footer />
      </>
    );
  }
}

export default PartTimeUTah;
