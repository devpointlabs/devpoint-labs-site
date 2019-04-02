import React from 'react';
import { Button, Divider, Grid, Header, Icon, Search, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

class Home extends React.Component {

  render() {
    return (
      <Segment placeholder>
        <Grid columns={2}>

          <Grid.Row >
            <Grid.Column
              verticalAlign='middle'
              stackable textAlign='left'
            >
              <Header style={{ "fontSize": "5.5em" }}>
                I Do
              <div style={{ "height": "30px" }}><br /></div>
                We Do
              <div style={{ "height": "30px" }}><br /></div>
                You Do
            </Header>
            </Grid.Column>

            <Grid.Column stackable textAlign='left'>
              <div icon>
                <Icon style={{fontSize:"2.9em"}} name='hand spock outline' />
              </div>
              <Header style={{fontSize: "2.9em" }}>
                The DevPoint Labs Approach
            </Header>
              <Header style={{fontSize: "2em" }}>
              We believe in a specific approach to teaching code.
            </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const HeaderStyle = styled(Header)`
  width: fluid;
`

export default Home