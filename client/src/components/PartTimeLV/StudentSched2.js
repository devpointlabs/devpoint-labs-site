import React from 'react'
import { Grid, Header, Icon, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import { media2 } from '../../theme/media'

const StudentSched2 = () => (
  <GridStyle>
    <Grid style={styles.grid} container>

      <Grid.Row width={16}>
        <Grid.Column>
          <Header style={{ fontSize: '3em' }} textAlign='center'>
            Student Schedule
          </Header>
          <br />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <Icon name='sun' size='big' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as='h3'>
            Feature One
          </Header>
          <p>
            In such a test, the user perfomrs realistic tasks by interacting 
            with the paper prototype
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <Icon name='sun outline' size='big' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as='h3'>
            Feature Two
          </Header>
          <p>
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
          <Header as='h3'>
            Feature Three
          </Header>
          <p>
            Rapid prototyping involves a group of designers who each create 
            a paper prototype
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <Icon name='life ring outline' size='big' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as='h3'>
            Feature Four
          </Header>
          <p>
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
          <Header as='h3'>
            Feature Five
          </Header>
          <p>
            Three techniques of paper prototyping used for usability 
            testing are comps, wireframes
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <Icon name='asterisk' size='big' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as='h3'>
            Feature Six
          </Header>
          <p>
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
    paddingTop: '7em',
    paddingBottom: '7em',
  }
}

const GridStyle = styled(Container)`
  ${media2.tablet`
      padding-left: 10% !important
      padding-right: 10% !important
  `}
`

export default StudentSched2