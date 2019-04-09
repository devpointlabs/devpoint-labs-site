import React from 'react'
import { Grid, Header, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import { media } from '../theme/media'

const Landing = () => (
    <Grid as={SegmentStyles} columns={2} textAlign='center'>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header inverted style={{ fontSize: '5em', transform: 'translate(0, -1em)' }}>
            Ready to <br/> code? Let's <br/> get started.
          </Header>
        </Grid.Column>

        <Grid.Column>
        </Grid.Column>
      </Grid.Row>
    </Grid>
)

const SegmentStyles = styled(Grid)`
  background: url('https://www.hallevans.com/wp-content/uploads/2019/02/SLC_Media.jpg') !important
  background-size: cover !important
  height: 60em
  margin-bottom: 2em !important
  display: flex !important
  flex-wrap: wrap !important
  border: none !important
  transform: translate(0, -5em) !important
`

export default Landing