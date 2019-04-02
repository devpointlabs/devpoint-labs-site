import React from 'react'
import { Button, Divider, Grid, Header, Icon, Search, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const Landing = () => (
    <Grid as={SegmentStyles} columns={2} textAlign='center'>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header style={{ fontSize: '5em', marginRight: '25%', transform: 'translate(0, -100px)' }}>
            Ready to <br/> code? Let's <br/> get started.
          </Header>
        </Grid.Column>

        <Grid.Column>
          <ImageStyle src="https://www.desertjet.com/app/uploads/2015/10/placeholder-vertical.jpg" alt=""/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
)

const SegmentStyles = styled(Grid)`
  width: 100%
  height: 1000px
  margin-top: -10% !important
  border: none !important
  background: transparent !important
`

const ImageStyle = styled.img`
  width: 600px
  height: 700px
  display: flex !important
  padding-top: 90px
`

export default Landing