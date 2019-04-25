import React from "react";
import IDos from "./IDos";
import { Container } from "semantic-ui-react";
import images from "../../assets/images/sitguys.jpg";
import PageOptions from "./PageOptions";
import Landing from "./Landing";
import Reviews from "../Reviews/Reviews";
import CoursesSection from "./CoursesSection";
import CampusTour from "./CampusTour";
import HomeLogos from "./HomeLogos";
import Footer from "../MAIN/Footer";
import styled from "styled-components";
import { media } from "../../theme/media";

const BackgroundStyles = styled.div`
  height: 60em ${media.tablet`
  height: 79.5em
  `} ${media.phone`
  height: 77em
  `};
`;

class Home extends React.Component {
  render() {
    return (
      <BackgroundStyles
        style={{
          backgroundImage: `url('${images}')`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          transform: `translate(0, 0)`
        }}
      >
        <div />
        <Landing />
        <Container>
          <HomeLogos />
        </Container>
        <PageOptions />
        <IDos />
        <Reviews />
        <CampusTour />
        <CoursesSection />
        <Footer />
      </BackgroundStyles>
    );
  }
}

export default Home;
