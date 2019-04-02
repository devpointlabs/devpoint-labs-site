import React from 'react';
import { Button, Divider, Grid, Header, Icon, Search, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

class Home extends React.Component {

  render() {
    return (
      <>
        <Grid columns={2}>

          <Grid.Row >
            <Grid.Column stackable textAlign='left'
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
              <Header>
                <br />
                <div icon>
                  <Icon style={{ fontSize: "2.9em" }} name='hand spock outline' />
                  <br />
                  <br />
                </div>
                <div style={{ fontSize: "2.2em" }}>
                  The DevPoint Labs Approach
                </div>
                <br />
                <br />
                <div style={{ fontSize: "1.5em", fontWeight: "50" }}>
                  We believe in a specific approach to teaching code.
                </div>
                <br />
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

const HeaderStyle = styled(Header)`
  width: fluid;
`

export default Home