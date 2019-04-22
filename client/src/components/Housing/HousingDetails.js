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
          <Header style={{ fontSize: "4em" }} textAlign="center">
            Housing Details
          </Header>
          <br />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      
        <Grid.Column width={8}>
          <Header as="h1">What's Included</Header>
          <h4>Utilities and amenitites including gas, water, internet, kitchenware, furniture, a bed, a washer and dryer</h4>
        </Grid.Column>

        
        <Grid.Column width={8}>
          <Header as="h1">What's Not Included</Header>
          <h4>Toiletries, bath towels, laundry detergent, and tupperware</h4>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      
        <Grid.Column width={8}>
          <Header as="h1">Rules</Header>
          <h4>
            No Pets, No smoking. Pickup after yourself and follow the cleaning schedule
          </h4>
        </Grid.Column>

        
        <Grid.Column width={8}>
          <Header as="h1">Move In Dates</Header>
          <h4>
            You will be contacted via email regarding move-in dates and availability for your cohort
          </h4>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      
        <Grid.Column width={8}>
          <Header as="h1">Location</Header>
          <h4>
            The DevHouse is approximately 0.7 miles away from campus or a 14 minute walk
          </h4>
        </Grid.Column>

        
        <Grid.Column width={8}>
          <Header as="h1">Rent</Header>
          <h4>Free for out-of-state full-time and part-time students on a first coem first serve basis. *Background checks will be conducted.
            <br />
            Security Deposit: $250 ($150 non-refundable for application and admin fees)
          </h4>
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
      padding-left: 5% !important
      padding-right: 5% !important
  `}
`;

export default StudentSchedule;