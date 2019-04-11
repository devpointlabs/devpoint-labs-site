import React from "react";
import TopimagesUtah from "../partTimeutahcomponents/TopimagesUtah";
import ScheduleUtah from "../partTimeutahcomponents/ScheduleUtah";
import HousingUtah from "../partTimeutahcomponents/HousingUtah";
import CostsUtah from "../partTimeutahcomponents/CostsUtah";
import Footer from "./Footer";

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
