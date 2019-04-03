import React from 'react'
import { Grid, Button } from 'semantic-ui-react'

const CampusTour = () => (
  <Grid>
    <Grid.Column width={5}>
      <h4>Want to come by for a <br /> campus tour</h4>
    </Grid.Column>
    <Grid.Column width={8}>
      <p>If you call Utah home or are visiting Salt Lake City, schedule a 
      <br />campus tour with one of our admissions directors to meet the 
      <br />staff, current students and classroom.</p>
    </Grid.Column>
    <Grid.Column width={2}>
      <Button inverted color='blue'>Schedule</Button>
    </Grid.Column>
  </Grid>
)

export default CampusTour