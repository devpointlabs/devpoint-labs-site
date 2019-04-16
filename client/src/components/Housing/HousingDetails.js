import React from "react";
import { Grid, Header, Icon, Container, Image } from "semantic-ui-react";
import styled from "styled-components";
import { media2, media } from "../../theme/media";
import UIcon from "../../assets/icons/theUIcon.png";
import SwitchIcon from "../../assets/icons/switchicon.png";
import AtomIcon from "../../assets/icons/AtomIcon.png";
import CompIcon from "../../assets/icons/compicon.png";
import Skyscraper from "../../assets/icons/skyscraper.png";
import Clock from "../../assets/icons/clockicon.png";

const StudentSchedule = () => (
  <GridStyle>
    <Grid stackable style={styles.grid} container>
      <Grid.Row width={16}>
        <Grid.Column>
          <Header style={{ fontSize: "3em" }} textAlign="center">
            Housing Details
          </Header>
          <br />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <StudentIcons src={AtomIcon} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">What's Included</Header>
          <p>Utilities and amenitites including gas, water, internet, kitchenware, furniture, a bed, a washer and dryer</p>
        </Grid.Column>
        <Grid.Column width={2}>
          <StudentIcons src={Skyscraper} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">What's Not Included</Header>
          <p>Toiletries, bath towels, laundry detergent, and tupperware</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <StudentIcons src={SwitchIcon} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Rules</Header>
          <p>
            No Pets, No smoking. Pickup after yourself and follow the cleaning schedule
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <StudentIcons src={Clock} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Move In Dates</Header>
          <p>
            You will be contacted via email regarding move-in dates and availability for your cohort
          </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <StudentIcons src={CompIcon} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Location</Header>
          <p>
            The DevHouse is approximately 0.7 miles away from campus or a 14 minute walk
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <StudentIcons src={UIcon} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Rent</Header>
          <p>Shared Dorm-Style: Free for out-of-state full-time and part-time students on a first coem first serve basis. *Background checks will be conducted.
            <br />
            Security Deposit: $250($150 non-refundable for application and admin fees)
          </p>
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