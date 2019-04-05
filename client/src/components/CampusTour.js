import React from 'react'
import { Grid, Button,} from 'semantic-ui-react'

const CampusTour = () => (
  <Grid style={styles.grid} stackable>

    <Grid.Column width={5}>
      <h4>Want to come by for a campus tour</h4>
    </Grid.Column>
    <Grid.Column width={9}>
      <p allowFontScaling={false}>If you call Utah home or are visiting Salt Lake City, schedule a campus tour
         with one of our admissions directors to meet the staff, current students and
          classroom.</p>
    </Grid.Column>
    <Grid.Column width={2} verticalAlign='middle'>
      <Button inverted color='blue'>Schedule</Button>
    </Grid.Column>
  </Grid>
)

const styles = {
  grid: {
    paddingTop: '5em',
    paddingBottom: '5em',
    paddingLeft: '10%',
    paddingRight: '10%'
  }
}

export default CampusTour