import React from "react";
import styled from "styled-components";
import { Container, Image, Header } from "semantic-ui-react";
import ScholarshipAbout from "./ScholarshipAbout";
import Footer from "./Footer";

class FinancingScholarships extends React.Component {
  render() {
    return (
      <>
        <div>
          <ContainerStyles>
            <Header
              inverted
              style={{
                zIndex: "1 !important",
                position: "absolute !important",
                transform: "translate(4em, 6em)"
              }}
            >
              {" "}
              Scholarship{" "}
            </Header>
            <HeaderStyles inverted>Deadlines:</HeaderStyles>
            <HeaderStyles inverted>
              Mar. 31th, 2019 (Summer Cohort)
            </HeaderStyles>
            <HeaderStyles inverted>July 6th, 2019 (Fall Cohort)</HeaderStyles>
          </ContainerStyles>

          <ScholarshipAbout />
        </div>
        <Footer />
      </>
    );
  }
}

const ContainerStyles = styled(Container)`
  width: 130em !important
  height: 35em !important
  background: url('https://www.devpointlabs.com/static/media/Church&State.63d0ba47.JPG') !important
  background-size: cover !important
  background-position: center !important
`;
const HeaderStyles = styled(Header)`
  font-size: .8em !important
  transform: translate(5em, 9em)
`;

export default FinancingScholarships;
