import React from "react";
import { Grid, Header, Icon, Container, Image } from "semantic-ui-react";
import styled from "styled-components";
import { media2, media } from "../../theme/media";

const StudentSchedule = () => (
  <GridStyle>
    <Grid stackable style={styles.grid} container>
      <Grid.Row width={16}>
        <Grid.Column>
          <Header  textAlign="center" style={{ fontFamily: `'Exo 2', sans-serif`, fontSize:"25px"}} >
            Housing Details
          </Header>
          <br />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      
        <Grid.Column width={8}>
          <Header as="h1" style={{ fontFamily: `'Exo 2', sans-serif`}}>What's Included</Header>
          <h4 style={{ fontFamily: `'Exo 2', sans-serif`}}>Utilities and amenitites including gas, water, internet, kitchenware, furniture, a bed, a washer and dryer</h4>
        </Grid.Column>

        
        <Grid.Column width={8}>
          <Header as="h1" style={{ fontFamily: `'Exo 2', sans-serif`}}>What's Not Included</Header>
          <h4 style={{ fontFamily: `'Exo 2', sans-serif`}}>Toiletries, bath towels, laundry detergent, and tupperware</h4>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      
        <Grid.Column width={8}>
          <Header as="h1" style={{ fontFamily: `'Exo 2', sans-serif`}}>Rules</Header>
          <h4 style={{ fontFamily: `'Exo 2', sans-serif`}}>
            No Pets, No smoking. Pickup after yourself and follow the cleaning schedule
          </h4>
        </Grid.Column>

        
        <Grid.Column width={8}>
          <Header as="h1" style={{ fontFamily: `'Exo 2', sans-serif`}}>Move In Dates</Header>
          <h4 style={{ fontFamily: `'Exo 2', sans-serif`}}>
            You will be contacted via email regarding move-in dates and availability for your cohort
          </h4>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      
        <Grid.Column width={8}>
          <Header as="h1" style={{ fontFamily: `'Exo 2', sans-serif`}}>Location</Header>
          <h4 style={{ fontFamily: `'Exo 2', sans-serif`}}>
            The DevHouse is approximately 0.7 miles away from campus or a 14 minute walk
          </h4>
        </Grid.Column>

        
        <Grid.Column width={8}>
          <Header as="h1" style={{ fontFamily: `'Exo 2', sans-serif`}}>Rent</Header>
          <h4 style={{ fontFamily: `'Exo 2', sans-serif`}}>Free for out-of-state full-time and part-time students on a first coem first serve basis. *Background checks will be conducted.
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