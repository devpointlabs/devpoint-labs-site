import React from "react";
import { Card, Grid, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../theme/media";
import CnS from "../../assets/images/CnS.jpg";
import LaunchImg from "../../assets/images/launchD.jpg";
import Audience from "../../assets/images/Audience.jpg";

const CoursesSection = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to left, ${colors.purp}, ${
          colors.darkPurp
        })`
      }}
    >
    <Container>
        <Grid stackable columns={2}>
          <Grid.Column>
            <Grid.Row>
              <OvrP>
                <PTUImage src={CnS} />
                <PartHead>Part-Time Web Development</PartHead>

                <TagText>Salt Lake City, Utah</TagText>
                <PartDescription>Learn why we're the best</PartDescription>
                <LinkButt>
                  <PartLink to="./PartTimeUtah">Learn More</PartLink>
                </LinkButt>
              </OvrP>
            </Grid.Row>
            <br />
            <Grid.Row>
              <OvrP>
                <PTUImage src={LaunchImg} />
                <PartHead>Part-Time Web Development</PartHead>

                <TagText>Las Vegas, Nevada</TagText>
                <PartDescription>
                  Become a coding master, while keeping a job
                </PartDescription>
                <LinkButt>
                  <PartLink to="./PartTimeLV">Learn More</PartLink>
                </LinkButt>
              </OvrP>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <OvrP>
              <FTUImage src={Audience} />
              <FullHead>Full-Time Web Development</FullHead>

              <TagText>Salt Lake City, Utah</TagText>
              <PartDescription>
                Learn why we're the best at what we do and why we're regarded as
                one of the best in the edtech industry today.
              </PartDescription>
              <LinkButt>
                <PartLink to="./FulltimeUtah">Learn More</PartLink>
              </LinkButt>
            </OvrP>
          </Grid.Column>
        </Grid>
        </Container>
    </div>
  );
};

const LinkButt = styled.div`
width: 40%;
border-radius: 3%
padding: 10px;
font-weight: 400;
position: absolute;
text-align: center;
top: 70%;
left: 50%;
transform: translate(-50%, -50%);
${media.phone`
  top: 75%
`}
`;

const PartLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: yellow;
  font-size: 18px;
  font-weight: 500;
  &:hover {
    text-decoration: none;
    color: #141414;
  }
  ${media.tablet`
    font-size: 1em
  `} 
`;

const TagText = styled.text`
  font-size: 18px;
  color: white;
  font-weight: 600;
  position: absolute;
  text-align: center;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.tablet`
    font-size: 1em
  `}
`;

const PartDescription = styled.text`
    font-size: 1em;
    color: white;
    font-weight: 400;
    position: absolute;
    text-align: center;
    top: 55%;
    left: 50%;
    width: 85%
    transform: translate(-50%, -50%);
    ${media.phone`
      width: 95%
    `}
`

const PartHead = styled.text`
  font-size: 1em;
  color: white;
  font-weight: 700;
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  width: 100%
  transform: translate(-50%, -50%);
  ${media.phone`
  top: 40%
  `}
`;
const FullHead = styled.text`
  font-size: 26px;
  color: white;
  font-weight: 700;
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  width: 100%
  transform: translate(-50%, -50%);
  ${media.tablet`
    font-size: 1.2em
  `}
  ${media.phone`
    top: 42%
    font-size: 1em
    padding-bottom: 50px
  `}
`;

const PTUImage = styled(Image)`
  position: absolute;
  opacity: 0.4
  z-index: -1;
  ${media.giant`
  height: 178px
  `}
  ${media.phone`
    width: auto
    height: 200px
  `}
`;
const FTUImage = styled(Image)`
  position: absolute;
  opacity: 0.2
  z-index: -1;
  height: 378px
  ${media.phone`
    width: 400px !important
    height: 250px
  `}
`;

const OvrP = styled.div`
  position: relative;
  background-image: linear-gradient(black, black);
  opacity: 0.9;
  box-shadow: 2px 3px 8px;
  ${media.tablet`
  position: relative;
  width: auto;
  opacity: 0.9
  `} 
  ${media.phone`
  position: relative;
  width: auto;
  opacity: 0.9
  `};
  `;
    // height: 500px
    // background: #6E54A3;

const colors = {
  black: `#141414`,
  darkGrey: `#2d2d2d`,
  grey: `#757575`,
  darkPurp: `#53407A`,
  purp: `#6E54A3`,
  white: `#FFFFFF`,
  lightPurp: "#e4dced"
};

const styles = {
  rCardSize: {
    width: "100%",
    height: "29.5em",
    paddingTop: "15em"
  },

  cardSize: {
    padding: "2em",
    width: "100%",
    height: "14em"
  },

  headerFont: {
    fontSize: "1.2em"
  },

  metaFont: {
    fontSize: ".7em"
  },

  descFont: {
    fontSize: ".9em"
  },

  cardLink: {
    fontWeight: "bold"
  }
};

export default CoursesSection;
