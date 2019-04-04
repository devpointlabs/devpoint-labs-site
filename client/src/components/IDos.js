import React from 'react';
import { Grid, Header, Icon, } from 'semantic-ui-react'
import styled from 'styled-components'

class IDos extends React.Component {

  render() {
    return (
      <>
        <Grid columns={2}>

          <Grid.Row >
            <Grid.Column mobile={14} tablet={8} computer={8} stackable textAlign='left'
            >
              <Header style={{ "fontSize": "5.5em" }}>
                I Do
              <div style={{ "height": "30px" }}><br /></div>
                We Do
              <div style={{ "height": "30px" }}><br /></div>
                You Do
            </Header>
            </Grid.Column>

            <Grid.Column mobile={14} tablet={8} computer={8}  stackable textAlign='left'>
              <Header>
                <br />
                <div icon>
                  <Icon style={{ fontSize: "2.9em" }} name='hand spock outline' />
                  <br />
                  <br />
                </div>
                <Lin1Style>
                  The DevPoint Labs Approach
                </Lin1Style>
                <br />
                <br />
                <Lin2Style>
                  We believe in a specific approach to teaching code.
                </Lin2Style>
                <br />
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

const Lin1Style = styled.div`
    font-size: 2.2em;

   @media (max-width: 700px) {
    font-size: 1.55em
   }
   @media (max-width: 1025px) {
    font-size: 1.6em
   }
   @media (max-width: 400px) {
    font-size: 1.4em
   }
   @media (max-width: 400px) {
    font-size: 1.4em
   }

`
const Lin2Style = styled.div`
    font-size: 1.5em;
    font-weight: 50;

   @media (max-width: 700px) {
    font-size: 1.25em
   }
   @media (max-width: 1025px) {
    font-size: 1.3em
   }
   @media (max-width: 400px) {
    font-size: 1.2em
   }

`


export default IDos