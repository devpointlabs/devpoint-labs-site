import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { media } from "../../theme/media"
import { Header, Container, Grid, Button, Card, Image } from "semantic-ui-react"
import axios from 'axios'

const CostDates = (props) => {
  const [cohorts, setCohorts] = useState([])

  useEffect( () => {
    axios.get("/api/cohorts")
      .then( res => {
        setCohorts(res.data)
      })
  }, [])

  return (
    <>
      <TextContainer>
        <Header textAlign="center" style={{ fontSize: "4em" }}>
          Tuition & Course Dates
        </Header>
        <br />
        <BlockText>
          This non-credit program is offered in partnership with The University of
          Utah Professional Education. The online application process is handled
          by DevPoint Labs. Appliocant can expect to receive a call or email from
          one of our admissions advisors. Please contact The University of Utah's
          Professional Education department at (801)-587-0139.
        </BlockText>
      </TextContainer>
      <br />
      <br />
      <br />
      <CostContainer>
        <Grid stackable columns={3}>
          <Grid.Row>
              {
                 cohorts.slice(0, 3).map( cohort => {
                  return(
                  <Grid.Column item={cohorts} key={cohorts.id}>
                    <CostCard style={styles.costBox} >
                      <Image src={cohort.image_url} />
                      <br />

                      <CardHeader>{cohort.season}</CardHeader>
                      <CostDes>
                        { cohort.description }
                      </CostDes>
                      <ul>
                        <CostPoint>
                          { cohort.start_date }
                        </CostPoint>
                        <CostPoint>{ cohort.schedule }</CostPoint>
                        <CostPoint>{ cohort.cost }</CostPoint>
                        <CostPoint>{ cohort.location }</CostPoint>
                      </ul>
                      <br />
                          <Link to="/ApplicationsForm">
                            <CardButton inverted color='blue'>Apply Now</CardButton>
                          </Link>
                          <br />
                          <h5 style={{ width: '100%' }}>Or</h5>
                          <br />
                            <Link
                              to="/"
                              style={{
                              display: 'flex !important',
                              justifyContent: 'center !important',
                              marginBottom: '2em',
                              fontSize: "20px",
                              fontStyle: "bold",
                            }}
                            >
                            <CardButton inverted color='orange'>Learn More</CardButton>
                          </Link>
                    </CostCard>
                  </Grid.Column>
                  )
                })
              }
          </Grid.Row>
        </Grid>
      </CostContainer>
    </>
  )
}

const styles = {
  costBox: {
    width: "500px",
    padding: 0
  }
};

const CostPoint = styled.p`
  font-size: 14px;
  text-align: left;
`;

const CostDes = styled.text`
  font-size: 18px;
  text-align: left;
  padding: 20px;
`;

const CostCard = styled(Card)`
  height: auto;
`;

const TextContainer = styled(Container)``;

const BlockText = styled.div`
  margin-left: 7em
  width: 80%
  text-align: left
  font-size: 18px
  ${media.phone`
    margin-left: 0
    width: 100%
  `}
`;
const CostContainer = styled(Container)`
  text-align: center ${media.phone`
    width: 450px
    margin-left: 0px
  `};
`;
const CardHeader = styled.h1`
  font-size: 24px
  font-weight: bold
  text-align: left
  margin-left: 5%
`;
const CardButton = styled(Button)`
  
  ${media.phone`
    width: 7.5em
  `};
`;

export default CostDates;
