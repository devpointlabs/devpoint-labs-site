import React from "react";
import StudentSchedule from "./StudentSchedule";
import HeroImage from "./HeroImage";
import CostDates from "./CostDates";
import FreeHousing from "../Housing/FreeHousing";
import Footer from "../MAIN/Footer";

const FullTimeUtah = () => {
  return (
    <>
      <HeroImage />
      <StudentSchedule />
      <CostDates />
      <Footer />
    </>
  );
};

export default FullTimeUtah;
