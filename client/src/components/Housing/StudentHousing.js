import React from "react";
import {
  Header,
  Segment,
  Container,
  Grid,
  GridRow,
  Image,
  GridColumn
} from "semantic-ui-react";
import Footer from "../MAIN/Footer";
import BannerImages from './BannerImages'
import HousingDetails from './HousingDetails'

class StudentHousing extends React.Component {
  render() {
    return (
      <>
      <BannerImages />
      <HousingDetails />
      <Footer />
       </>
    
    );
  }
}

const styles = {
  header: {
    fontSize: "32px",
    font: "Open Sans",
    fontWeight: "80",
    // font: "sans seraf",
    color: "#8168b1",
    marginTop: "40px",
    marginBottom: "40px"
  }
};

export default StudentHousing;
