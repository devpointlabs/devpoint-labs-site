import React from "react";
import IDos from "./IDos";
import { Container, } from "semantic-ui-react";
import images from "../../assets/images/Airplaneshot-1-min.png";
import PageOptions from "./PageOptions";
import Landing from "./Landing";
import Reviews from "../Reviews/Reviews";
import CoursesSection from "./CoursesSection";
import CampusTour from "./CampusTour";
import HomeLogos from "./HomeLogos";
import Footer from "../MAIN/Footer";

const BackgroundStyles = {
  backgroundImage: `url('${images}')`,
  backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  height: `60em`,
  transform: `translate(0, -5em)`
}

class Home extends React.Component {
  render() {
    return (
      <div style={BackgroundStyles}>
        <Landing />
        <Container>
          <HomeLogos />
        </Container>
        <PageOptions />
        <Container>
          <IDos />
        </Container>
        <Reviews />
        <Container>
          <CampusTour />
          <CoursesSection />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
