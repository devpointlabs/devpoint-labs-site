import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PageOptions = () => (
  <>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Image />
            <Header textAlign='center'>
                University Partner
            </Header>
            <p style={{ textAlign: 'center', fontSize: '.9em' }}>
              User Interface designs includes selecting
              <br/>
               and arranging interface elements
            </p>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '.9em'}}>
            <Link to='/' >
              First Link 
            </Link>
            </p>
        </Grid.Column>
        <Grid.Column>
          <Image />
            <Header textAlign='center'>
              Financing And Scholarships
            </Header>
            <p style={{ textAlign: 'center', fontSize: '.9em' }}>
              Page layout is where components
              <br/>
               come together, while wireframing
            </p>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '.9em'}}>
            <Link to='/' >
              Second Link
            </Link>
            </p>
        </Grid.Column>
        <Grid.Column>
          <Image />
            <Header textAlign='center'>
              Free Student Housing
            </Header>
            <p style={{ textAlign: 'center', fontSize: '.9em' }}>
              For complex project, wireframes using
              <br/>
               computer software is popular
            </p>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '.9em'}}>
            <Link to='/' >
              Third Link
            </Link>
            </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
)

export default PageOptions