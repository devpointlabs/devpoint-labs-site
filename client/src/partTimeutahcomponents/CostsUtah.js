import React from 'react'
import styled from 'styled-components'
import { media } from '../theme/media'
import { Header, Container, Grid, Button } from 'semantic-ui-react'

const CostsUtah = () => (
  <>
    <TextContainer>
      <Header textAlign="center" style={{ fontSize: "4em", }}>Tuition & Course Dates</Header>
      <br />
      <BlockText>This non-credit program is offered in partnership with The University of Utah Professional Education. The
        online application process is handled by DevPoint Labs.
        Appliocant can expect to receive a call or email from 
        one of our admissions advisors. Please contact The University of Utah's
          Professional Education department at (801)-587-0139.
      </BlockText>
    </TextContainer>
    <br />
    <br />
    <br />
    <CostContainer>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column style={styles.costBox}>
          <br />
            <CardHeader>Summer 2019</CardHeader>
            <CardDescription>
              <br />
              Start Date: May 6th - July 23rd, 2019
              <br />
              <br />
              <br />
              Schedule: Mon - Thurs: 6:00 PM - 9:00 PM
              <br />
              <br />
              <br />
              Cost: $5,000 USD
              <br />
              <br />
              <br />
              Location: Salt Lake City, Utah
              <br />
              <br />
              <br />
              <CardButton href="/ApplicationsForm" primary>Apply Now</CardButton>
              <br />
              <br />
              <br />
              <br />
            </CardDescription>
          </Grid.Column>
          <Grid.Column style={styles.costBox}>
          <br />
            <CardHeader>Fall 2019</CardHeader>
            <CardDescription>
              <br />
              Start Date: Aug. 12 - Oct. 25th, 2019
              <br />
              <br />
              <br />
              Schedule: Mon - Thurs: 6:00 PM - 9:00 PM
              <br />
              <br />
              <br />
              Cost: $5,000 USD
              <br />
              <br />
              <br />
              Location: Salt Lake City, Utah
              <br />
              <br />
              <br />
              <CardButton href="/ApplicationsForm" primary>Apply Now</CardButton>
            </CardDescription>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </CostContainer>
  </>
)

const styles = {
  costBox: {
    border: "25px solid white",
    padding: "10px",
    background: "#f5f5f5"
  }
}

const TextContainer = styled(Container)`
  
`

const BlockText = styled.div`
  margin-left: 7em
  width: 80%
  text-align: left
  font-size: 18px
  ${media.phone`
    margin-left: 0
    width: 100%
  `}
`
const CostContainer = styled(Container)`
  text-align: center
  ${media.phone`
    width: 450px
    margin-left: 0px
  `}
`
const CardHeader = styled.h1`
  font-size: 26px
  font-weight: bold
`
const CardDescription = styled.p`
  font-size: 18px
 ${media.phone`
    text-align: left
 `}
`
const CardButton = styled(Button)`
  width: 20em
  ${media.phone`
    width: 7.5em
  `}
`

export default CostsUtah