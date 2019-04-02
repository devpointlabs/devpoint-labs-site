import React from 'react';
import { Button, Divider, Grid, Header, Icon, Search, Segment, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import PageOptions from './PageOptions'

class Home extends React.Component {

  render () {
    return (
      <>
      <PageOptions />
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
        <Divider vertical>Or</Divider>

        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Header icon>
              <Icon name='search' />
              Find Country
            </Header>

            <Search placeholder='Search countries...' />
          </Grid.Column>

          <Grid.Column>
            <Header icon>
              <Icon name='world' />
              Add New Country
            </Header>
            <Button primary>Create</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </>
    )
  }
}

const SegmentStyle = styled(Segment)`
  width: 100%
`

export default Home