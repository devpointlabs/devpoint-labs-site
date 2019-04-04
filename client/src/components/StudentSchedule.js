import React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

const StudentSchedule = () => (
    <Grid style={styles.grid} container>

      <Grid.Row width={16}>
        <Grid.Column>
          <Header as='h1' textAlign='center'>
            Student Schedule
          </Header>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <Icon name='sun' size='big' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as='h4'>
            Feature One
          </Header>
          <p size='x-small'>
            In such a test, the user perfomrs realistic tasks by interacting 
            with the paper prototype
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <Icon name='sun outline' size='big' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as='h4'>
            Feature Two
          </Header>
          <p size='x-small'>
            Three techniques of paper prototyping used for usability testing 
            are comps, wireframes
          </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <Icon name='life ring' size='big' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as='h4'>
            Feature Three
          </Header>
          <p size='x-small'>
            Rapid prototyping involves a group of designers who each create 
            a paper prototype
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <Icon name='life ring outline' size='big' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as='h4'>
            Feature Four
          </Header>
          <p size='x-small'>
            Functionality is similarly unimportant, but in this case are 
            closer to the final product
          </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <Icon name='snowflake' size='big' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as='h4'>
            Feature Five
          </Header>
          <p size='x-small'>
            Three techniques of paper prototyping used for usability 
            testing are comps, wireframes
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <Icon name='asterisk' size='big' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as='h4'>
            Feature Six
          </Header>
          <p size='x-small'>
            In such a test, the user perfomrs realistic tasks by 
            interacting with the paper prototype
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
)

const styles = {
  grid: {
    paddingTop: '5em',
    paddingBottom: '5em',
    // paddingLeft: '20%',
    // paddingRight: '20%'
  }
}

export default StudentSchedule