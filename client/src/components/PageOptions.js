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
              User Interface designs includes selecting
              <br/>
               and arranging interface elements
            </p>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em'}}>
            <Link to='/' >
              First Link 
            </Link>
            </p>
        </Grid.Column>
        <Grid.Column>
          <Icon name='student' size='big' style={{ marginLeft: '47%'}} />
            <Header as='h2' textAlign='center'>
              Financing And Scholarships
            </Header>
            <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
              Page layout is where components
              <br/>
               come together, while wireframing
            </p>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em'}}>
            <Link to='/' >
              Second Link
            </Link>
            </p>
        </Grid.Column>
        <Grid.Column>
          <Icon name='home' size='big' style={{ marginLeft: '47%'}} />
            <Header  as='h2' textAlign='center'>
              Free Student Housing
            </Header>
            <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
              For complex project, wireframes using
              <br/>
               computer software is popular
            </p>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em'}}>
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