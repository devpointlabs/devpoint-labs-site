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
import Footer from "./Footer";

class StudentHousing extends React.Component {
  render() {
    return (
      <>
        <Container style={{ marginBottom: "150px", marginTop: "100px" }}>
          <h1 style={{ textAlign: "center", color: "#8168b1" }}>
            Student Housing
          </h1>
        </Container>
        <Segment style={{ backround: "#f4f4f4" }}>
          <Container>
            <Header style={styles.header}>The Dev House</Header>
            <p style={{ marginBottom: "40px" }}>
              Fully furnished free student housing steps away from campus.
            </p>
          </Container>
        </Segment>
        <>
          <Container style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Grid
              columns={2}
              style={{ marginLeft: "100px", marginBottom: "150px" }}
            >
              <GridRow
                centered
                style={{ marginBottom: "50px", marginTop: "50px" }}
              >
                <GridColumn>
                  <Image src="https://www.devpointlabs.com/static/media/devhouse.3577e06f.png" />
                </GridColumn>
                <GridColumn>
                  <Image src="https://www.devpointlabs.com/static/media/devhouse-livingroom.f2ea1cdc.png" />
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn>
                  <Image src="https://www.devpointlabs.com/static/media/devhouse-backyard.c6966b15.png" />
                </GridColumn>
                <GridColumn>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.6114997769395!2d-111.88465377078118!3d40.75221431464827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f53e5690901f%3A0xb00200e0c3b62fe3!2s231+800+S%2C+Salt+Lake+City%2C+UT+84111!5e0!3m2!1sen!2sus!4v1545625160237"
                    width="255"
                    height="197"
                    frameborder="0"
                    allowfullscreen=""
                    title="dpl-google-map"
                    style={{ border: "2px solid" }}
                  />
                </GridColumn>
              </GridRow>
            </Grid>
          </Container>
        </>
        <>
          <Container>
            <Header
              style={{
                textAlign: "center",
                fontSize: "32px",
                color: "#8168b1"
              }}
            >
              Housing Details
            </Header>
            <h4 style={{ color: "#8168b1" }}>Rent</h4>
            <hr />
            <p>
              <b>Shared Dorm-Style:</b>
              "Free for out-of-state Full-time and part-time students on a first
              come first serve basis. *Background checks will be conducted."
              <br />
              <b>Security Deposit</b>
              "$250 ($150 non-refundable for application and admin fees)"
            </p>
            <br />
            <br />
            <h4 style={{ color: "#8168b1" }}>What's Included</h4>
            <hr />
            <p>
              "We pay for the following utilities and amenities. Including gas,
              water, internet, kitchenware, furniture, a bed, a washer and a
              dryer."
            </p>
            <br />
            <br />
            <h4 style={{ color: "#8168b1" }}>What's Not Included</h4>
            <hr />
            <p>
              "Plan on gathering all toiletries, bath towels, laundry detergent,
              and tupperware."
            </p>
            <br />
            <br />
            <h4 style={{ color: "#8168b1" }}>Rules</h4>
            <hr />
            <p>
              "No pets. No smoking. Pickup after yourself and follow the
              cleaning schedule."
            </p>
            <br />
            <br />
            <h4 style={{ color: "#8168b1" }}>Move In Dates</h4>
            <hr />
            <p>
              "You will be contacted via email regarding move-in dates and
              availability for your cohort."
            </p>
            <br />
            <br />
            <h4 style={{ color: "#8168b1" }}>Location</h4>
            <hr />
            <p>
              "The DevHouse is approximately 0.7 miles away from the campus or a
              14 minute walk."
            </p>
            <br />
            <br />
          </Container>
          <Footer />
        </>
      </>
    );
  }
}

const styles = {
  header: {
    fontSize: "32px",
    font: "Open Sans",
    fontWeight: "80",
    font: "sans seraf",
    color: "#8168b1",
    marginTop: "40px",
    marginBottom: "40px"
  }
};

export default StudentHousing;
