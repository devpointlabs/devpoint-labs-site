import React from 'react'
import { Grid, Header, } from 'semantic-ui-react'
import styled from 'styled-components'

const Landing = () => (
    <Grid as={SegmentStyles} columns={2} textAlign='center'>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header inverted style={{ fontSize: '5em', transform: 'translate(0, -1em)' }}>
            Ready to <br /> code? Let's <br/> get started.
          </Header>
        </Grid.Column>

        <Grid.Column>
        </Grid.Column>
      </Grid.Row>
    </Grid>
)

const SegmentStyles = styled(Grid)`
  height: 70em;
  display: flex !important;
  flex-wrap: wrap !important;
  border: none !important;
`

const colors = {
  black: `#141414`,
  darkGrey: `#2d2d2d`,
  grey: `#757575`,
  darkPurp: `#53407A`,
  purp: `#6E54A3`,
  white: `#FFFFFF`,
  lightPurp: "#e4dced",
  blue: `#B2DBF1`
};

export default Landing