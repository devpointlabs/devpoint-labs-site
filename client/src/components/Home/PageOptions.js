import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PageOptions = () => (
  <>
    <div style={{ background: "#f5f5f5", padding: "50px" }}>
      <Grid
        columns={3}
        stackable
        class="ui equal width grid"
        style={{ display: "flex", paddingBottom: "30px" }}
      >
        <Grid.Row>
          <Grid.Column>
            <Icon name="university" size="big" style={{ marginLeft: "50%" }} />
            <Header as="h2" textAlign="center">
              University Partner
            </Header>
            <p style={{ textAlign: "center", fontSize: "1.2em" }}>
              Learn the skills in web development to earn a University of Utah
              Professional Education endorsed certificate powered by DevPoint
              Labs.
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.2em"
              }}
            >
              <a href="https://devpointlabs.continue.utah.edu/" target="_blank" rel="noopener noreferrer">
                More Info
              </a>
            </p>
          </Grid.Column>
          <br />
          <Grid.Column>
            <Icon name="student" size="big" style={{ marginLeft: "47%" }} />
            <Header as="h2" textAlign="center">
              Financing And Scholarships
            </Header>
            <p style={{ textAlign: "center", fontSize: "1.2em" }}>
              We're excited to offer two scholarships for our Full-Time ProEd
              Web Development and Part-Time Web Development classes.
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.2em"
              }}
            >
              <br />
              <Link to="/DPLScholarships">More Info</Link>
            </p>
          </Grid.Column>
          <Grid.Column>
            <Icon name="home" size="big" style={{ marginLeft: "47%", transform: 'translate(0, .25em)' }} />
            <Header as="h2" textAlign="center" style={{ marginLeft: "10px" }}>
              Free Student Housing
            </Header>
            <p style={{ textAlign: "center", fontSize: "1.2em" }}>
              The DevHouse - Fully furnished free student housing steps away
              from campus.
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.2em"
              }}
            >
            <br/>
              <Link to="/StudentHousing">More Info</Link>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </>
);

export default PageOptions;
