import React from 'react'
import { Grid, Header, Icon, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import media from '../theme/media'

const StudentSchedule = () => (
  <GridStyle>
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
          <p style={{fontSize: 'x-small'}}>
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
          <p style={{fontSize: 'x-small'}}>
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
          <p style={{fontSize: 'x-small'}}>
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
          <p style={{fontSize: 'x-small'}}>
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
          <p style={{fontSize: 'x-small'}}>
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
          <p style={{fontSize: 'x-small'}}>
            In such a test, the user perfomrs realistic tasks by 
            interacting with the paper prototype
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </GridStyle>
)

const styles = {
  grid: {
    paddingTop: '5em',
    paddingBottom: '5em',
  }
}

const GridStyle = styled(Container)`
  ${media.desktop`
      padding-left: 20% !important
      padding-right: 20% !important
  `}
`

export default StudentSchedule