import React from "react";
import { Grid, Button } from "semantic-ui-react";
import styled from 'styled-components'

const CampusTour = () => (
  <GridStyle>
  <Grid stackable>
    <Grid.Column width={5}>
      <h4>Want to come by for a campus tour</h4>
    </Grid.Column>
    <Grid.Column width={9}>
      <p allowFontScaling={false}>
        If you call Utah home or are visiting Salt Lake City, schedule a campus
        tour with one of our admissions directors to meet the staff, current
        students and classroom.
      </p>
    </Grid.Column>
    <Grid.Column width={2} verticalAlign="middle">
      <Button inverted color="blue">
        Schedule
      </Button>
    </Grid.Column>
  </Grid>
  </GridStyle>
);

const GridStyle = styled.div`
    padding-top: 5em
    padding-bottom: 5em
    padding-left: 10%
    padding-right: 10%

    @media (max-width: 450px) {
      padding-top: 3em
      padding-bottom: 3em
      padding-left: 0.5em
      padding-right: 0.5em
    }
`
export default CampusTour;
