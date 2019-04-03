import React from 'react'
import { Grid, Image, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PageOptions = () => (
  <>
    <Grid columns={3} style={{ marginBottom: '5em'}}>
      <Grid.Row>
        <Grid.Column>
          <Icon name='university' size='big' style={{ marginLeft: '50%'}} />
            <Header  as='h2' textAlign='center'>
                University Partner
            </Header>
            <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
            Learn the skills in web development to earn a University of Utah Professional Education endorsed certificate powered by DevPoint Labs.
            </p>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em'}}>
            <a href='https://devpointlabs.continue.utah.edu/' target='_blank' >
              More Info
            </a>
            </p>
        </Grid.Column>
        <Grid.Column>
          <Icon name='student' size='big' style={{ marginLeft: '47%'}} />
            <Header as='h2' textAlign='center'>
              Financing And Scholarships
            </Header>
            <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
            We're excited to offer two scholarships for our Full-Time ProEd Web Development and Part-Time Web Development classes. 
            </p>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em'}}>
            <Link to='/FinancingScholarships' >
              More Info
            </Link>
            </p>
        </Grid.Column>
        <Grid.Column>
          <Icon name='home' size='big' style={{ marginLeft: '47%'}} />
            <Header  as='h2' textAlign='center'>
              Free Student Housing
            </Header>
            <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
              The DevHouse - Fully furnished free student housing steps away from campus.
            </p>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em'}}>
            <Link to='/StudentHousing' >
              More Info
            </Link>
            </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
)

export default PageOptions