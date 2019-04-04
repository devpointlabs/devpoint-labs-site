import React from 'react'
import { Grid, Header, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import media from '../theme/media'

const Landing = () => (
  <ContainerStyles>
    <Grid as={SegmentStyles} columns={2} textAlign='center'>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header style={{ fontSize: '5em', transform: 'translate(0, -2em)' }}>
            Ready to <br/> code? Let's <br/> get started.
          </Header>
        </Grid.Column>

        <Grid.Column>
          <ImageStyle src="https://www.desertjet.com/app/uploads/2015/10/placeholder-vertical.jpg" alt=""/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </ContainerStyles>
)

const SegmentStyles = styled(Grid)`
  height: 70em
  display: flex !important
  flex-wrap: wrap !important
  border: none !important
  background: transparent !important
`

const ImageStyle = styled.img`
  width: 50em
  height: 60em

  ${media.phone`
    display: none
  `}
`
const ContainerStyles = styled(Container)`
  ${media.phone`
    background: url('https://www.desertjet.com/app/uploads/2015/10/placeholder-vertical.jpg')
    background-repeat: no-repeat 
  `}
`

export default Landing