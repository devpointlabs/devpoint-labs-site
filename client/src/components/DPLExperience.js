import React from "react";
import styled from "styled-components";
import { media } from "../theme/media";
import { Header, Form, Icon, Container, Grid, Image } from "semantic-ui-react";

export default class DPLExperience extends React.Component {
  render() {
    return (
      <div>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={9}>
              <ImgContainer>
                <ExpImg
                  src="https://www.devpointlabs.com/static/media/group-staff.49a393cd.jpg"
                  size="huge"
                />
              </ImgContainer>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={7}>
              <br />
              <br />
              <br />
              <ExpHead>Experience DevPoint Labs</ExpHead>
              <br />
              <br />
              <ExpText>
                More than just code. Whether you’re a local or coming from
                out-of-state we blend students into a vibrant developer
                community building life long friendships.
              </ExpText>
              <br />
              <br />
              <Grid.Row>
                <Grid.Column mobile={16} tablet={8} style={{ width: "50%" }}>
                  <div>
                    <ModHead>
                      <ExpIcon>
                        <Icon size="big" name="sync alternate" />
                      </ExpIcon>
                      Hackathons
                    </ModHead>
                    <ModText>
                      See how much you can accomplish in a day-long coding
                      event.
                    </ModText>
                    <br />
                    <br />
                    <br />
                    <ModHead>
                      <ExpIcon>
                        <Icon size="big" name="mobile alternate" />
                      </ExpIcon>
                      DPL Nights | Student Activities
                    </ModHead>
                    <ModText>
                      Unwind from learning during DPL led activities like The
                      Bowling Classic, Tuesday Movie Nights, or some casual
                      meetups.
                    </ModText>
                  </div>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} style={{ width: "50%" }}>
                  <div>
                    <ModHead>
                      <ExpIcon>
                        <Icon size="big" name="building" />
                      </ExpIcon>
                      Conveniently Downtown
                    </ModHead>
                    <ModText>Located in the heart of Downtown, SLC.</ModText>
                    <br />
                    <br />
                    <br />
                    <br />
                    <ModHead>
                      <ExpIcon>
                        <Icon size="big" name="calendar alternate outline" />
                      </ExpIcon>
                      Daily Learning Schedule
                    </ModHead>
                    <ModText>
                      Through a mix of lectures and hands-on labs you’ll gain
                      the technical knowledge.
                    </ModText>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const ExpImg = styled(Image)`
  height: 35em;
  margin-left: -20%;
  margin-right: -40px;
  ${media.phone`
    display: none !important
  `};
`;

const ExpText = styled.p`
  font-size: 1.1em;
  font-weight: 100;
  padding-right 5em;
  line-height: 2
  ${media.phone`
    width: 100%
    padding-left: 60px
    font-size: 14px
  `}
`;
const ImgContainer = styled(Container)`
  position: relative;
  paddingleft: 10px;
  ${media.phone`
    
  `}
`;
const LeftGrid = styled(Grid.Column)``;

const ExpHead = styled.p`
  font-size: 31px;
  font-style: italic;
  font-weight: 100;
  ${media.phone`
    width: 100%
    padding-left: 60px
    text-align: left
    font-size: 20px
  `}
`;

const ModHead = styled.p`
  font-size: 1.2em;
  font-weight: 700;
  font-style: italic;
  padding-left: 10px;
  ${media.phone`
    width: auto
    text-align: center
    padding-top: 20px
    padding-left: 50px
  `};
`;

const ModText = styled.p`
  font-size: 1em;
  display: inline-block
  width: 80%
  text-align: left
  padding-top: 10px
  padding-left: 50px
  font-weight: 100
  ${media.phone`
    width: 100%
    text-align: left
    padding-left: 60px
    padding-bottom: 20px
    font-weight: 100
  `};
`;

const ExpIcon = styled.span`
  text-align: left;
  ${media.phone`
    text-align: left
    margin-bottom: 0
  `};
`;

const ModContainer = styled(Container)``;
