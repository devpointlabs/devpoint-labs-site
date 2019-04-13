import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../theme/media";
import {
  Header,
  Container,
  Grid,
  Card,
  Image
} from "semantic-ui-react";

const CostDates = () => (
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
          <Grid.Column>
            <CostCard style={styles.costBox}>
              <Image src="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/blue0517.jpg?itok=V3825voJ" />
              <br />

              <CardHeader>Fall 2019</CardHeader>
              <CostDes>
                This is an 11 week program to learn full-stack web development,
                this is an amazing course.
              </CostDes>
              <ul>
                <CostPoint>
                  Start Date: August 12th - October 25th, 2019
                </CostPoint>
                <CostPoint>Schedule: Mon - Fri: 9:30 AM to 5:30 PM </CostPoint>
                <CostPoint>Cost: $9,995.00 USD</CostPoint>
                <CostPoint>Location: Salt Lake City, Utah</CostPoint>
              </ul>
              <br />
              <Grid columns={1}>
                <Grid.Row>
                  <Link to="/ApplicationsForm">
                    <CardButton>Apply Now</CardButton>
                  </Link>
                  <span style={{ margin: "10px 30px" }}>Or</span>
                  <Link
                    to="/"
                    style={{
                      margin: "5px 5px",
                      fontSize: "20px",
                      fontStyle: "bold"
                    }}
                  >
                    Learn More
                  </Link>
                </Grid.Row>
              </Grid>
            </CostCard>
          </Grid.Column>
          <Grid.Column>
            <CostCard style={styles.costBox}>
              <Image src="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/blue0517.jpg?itok=V3825voJ" />
              <br />

              <CardHeader>Fall 2019</CardHeader>
              <CostDes>
                This is an 11 week program to learn full-stack web development,
                this is an amazing course.
              </CostDes>
              <ul>
                <CostPoint>
                  Start Date: August 12th - October 25th, 2019
                </CostPoint>
                <CostPoint>Schedule: Mon - Fri: 9:30 AM to 5:30 PM </CostPoint>
                <CostPoint>Cost: $9,995.00 USD</CostPoint>
                <CostPoint>Location: Salt Lake City, Utah</CostPoint>
              </ul>
              <br />
              <Grid columns={1}>
                <Grid.Row>
                  <CardButton href="/ApplicationsForm" primary>
                    Apply Now
                  </CardButton>
                  <span style={{ margin: "10px 30px" }}>Or</span>
                  <Link
                    to="/"
                    style={{
                      margin: "5px 5px",
                      fontSize: "20px",
                      fontStyle: "bold"
                    }}
                  >
                    Learn More
                  </Link>
                </Grid.Row>
              </Grid>
            </CostCard>
          </Grid.Column>
          <Grid.Column>
            <CostCard style={styles.costBox}>
              <Image src="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/blue0517.jpg?itok=V3825voJ" />
              <br />

              <CardHeader>Fall 2019</CardHeader>
              <CostDes>
                This is an 11 week program to learn full-stack web development,
                this is an amazing course.
              </CostDes>
              <ul>
                <CostPoint>
                  Start Date: August 12th - October 25th, 2019
                </CostPoint>
                <CostPoint>Schedule: Mon - Fri: 9:30 AM to 5:30 PM </CostPoint>
                <CostPoint>Cost: $9,995.00 USD</CostPoint>
                <CostPoint>Location: Salt Lake City, Utah</CostPoint>
              </ul>
              <br />
              <Grid columns={1}>
                <Grid.Row>
                  <CardButton href="/ApplicationsForm" primary>
                    Apply Now
                  </CardButton>
                  <span style={{ margin: "10px 30px" }}>Or</span>
                  <Link
                    to="/"
                    style={{
                      margin: "5px 5px",
                      fontSize: "20px",
                      fontStyle: "bold"
                    }}
                  >
                    Learn More
                  </Link>
                </Grid.Row>
              </Grid>
            </CostCard>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </CostContainer>
  </>
);

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
const CardButton = styled.button`
  width: 120px;
  padding: 10px;
  background: #1d8ece;
  color: white;
  font-weight: 600;
  margin-left: 50px;
  margin-bottom: 40px;
  ${media.phone`
    width: 7.5em
  `};
`;

export default CostDates;
