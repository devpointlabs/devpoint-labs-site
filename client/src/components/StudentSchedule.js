import React from "react";
import { Grid, Header, Icon, Container, Image } from "semantic-ui-react";
import styled from "styled-components";
import { media2, media } from "../theme/media";
import UIcon from "../assets/icons/theUIcon.png";
import SwitchIcon from "../assets/icons/switchicon.png";
import AtomIcon from "../assets/icons/AtomIcon.png";
import CompIcon from "../assets/icons/compicon.png";
import Skyscraper from "../assets/icons/skyscraper.png";
import Clock from "../assets/icons/clockicon.png";

const StudentSchedule = () => (
  <GridStyle>
    <Grid stackable style={styles.grid} container>
      <Grid.Row width={16}>
        <Grid.Column>
          <Header style={{ fontSize: "3em" }} textAlign="center">
            Student Life
          </Header>
          <br />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <StudentIcons src={AtomIcon} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Hackathons</Header>
          <p>See how much you can accomplish in a day-long coding event.</p>
        </Grid.Column>
        <Grid.Column width={2}>
          <StudentIcons src={Skyscraper} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Conveniently Downtown</Header>
          <p>Located in the heart of Downtown, SLC.</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <StudentIcons src={SwitchIcon} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">DPL Nights | Student Activities</Header>
          <p>
            Unwind from learning during DPL led activities like The Bowling
            Classic, Tuesday Movie Nights, or some casual meetups.
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <StudentIcons src={Clock} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Daily Learning Schedule</Header>
          <p>
            Through a mix of lectures and hands-on labs you’ll gain the
            technical knowledge.
          </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <StudentIcons src={CompIcon} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Advanced Curriculum</Header>
          <p>
            Learn the latest web technologies like React.js, Ruby on Rails, and
            more.
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <StudentIcons src={UIcon} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Earn Your U of U Certificate</Header>
          <p>Earn Your U of U Certificate</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </GridStyle>
);

const styles = {
  grid: {
    paddingTop: "7em",
    paddingBottom: "7em"
  }
};

const StudentIcons = styled(Image)`
  width: 60%;
  ${media.phone`
    width: 10%
  `}
`;

const GridStyle = styled(Container)`
  ${media2.tablet`
      padding-left: 10% !important
      padding-right: 10% !important
  `}
`;

export default StudentSchedule;
