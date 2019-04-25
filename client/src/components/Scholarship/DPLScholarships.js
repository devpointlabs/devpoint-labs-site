import React from "react";
import Footer from "../MAIN/Footer";
import dayinlife from "../../assets/images/coderscropped.jpg";
import styled from "styled-components";
import { media } from "../../theme/media";
import { Image, Grid, Icon, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import wallpaper from "../../assets/images/qbkls.png";
import { Container } from "react-bootstrap";

class DPLScholarships extends React.Component {
  render() {
    return (
      <>
        <OvrP>
          <TeamImage src={dayinlife} />
          <BanHead style={{ fontFamily: `'Exo 2', sans-serif`}}>
            DevPoint Labs <br /> Scholarships
          </BanHead>
        </OvrP>
        <div style={{ background: `url(${wallpaper})`, fontFamily: `'Exo 2', sans-serif` }}>
          <SegStyle>
            <HeaderStyle style={{ fontFamily: `'Exo 2', sans-serif`}}>About</HeaderStyle>
            <br />
            <br />
            <ContentStyle>
              We're excited to offer two scholarships for our Full-Time ProEd
              Web Development and Part-Time Web Development classes. We will be
              awarding 50% off tuition for a Women in Tech and also a Diversity
              in Tech Scholarship. We're looking for individuals who demonstrate
              grit, have a passion for learning, and empathy. Previous coding
              experience is not required, however they're expected to complete
              all prep work before day one of class.
            </ContentStyle>
          </SegStyle>
        </div>
        <div style={{ textAlign: "center" }}>
          <br />
          <HeaderStyle style={{ textDecoration: "underline", fontFamily: `'Exo 2', sans-serif` }} >
            How To Apply
          </HeaderStyle>
        </div>
        <GridStyle>
          <Grid stackable columns={6} style={{ fontFamily: `'Exo 2', sans-serif` }}>
            <Grid.Column width={1}>
              <Icon name="envelope outline" size="large" />
            </Grid.Column>
            <Grid.Column width={4}>
              <HdStyle>Apply</HdStyle>
              <RowStyle>
                <p>
                  Send in a full application for the prospective class:
                  Full-Time Web Development or Part-Time Web Development.
                </p>
              </RowStyle>
              <Link
                to="/ScholarshipForm"
                style={{
                  textDecoration: "underline",
                  color: `${colors.darkPurp}`
                }}
              >
                Scholarship Application >
              </Link>
            </Grid.Column>
            <Grid.Column width={1}>
              <Icon name="edit" size="large" />
            </Grid.Column>
            <Grid.Column width={4}>
              <HdStyle>Essay & Recommendation</HdStyle>
              <RowStyle>
                <p>
                  Fill out the essay questions in the scholarship application.
                  Tell us why you're the best candidate. Next send your
                  recommendation letter from either a school official, employer,
                  teacher, or member of a community organization to
                  contact@devpointlabs.com
                </p>
              </RowStyle>
              <Link
                to="/ScholarshipForm"
                style={{
                  textDecoration: "underline",
                  color: `${colors.darkPurp}`
                }}
              >
                Scholarship Application >
              </Link>
            </Grid.Column>
            <Grid.Column width={1}>
              <Icon name="paper plane outline" size="large" />
            </Grid.Column>
            <Grid.Column width={4}>
              <HdStyle>Follow Us</HdStyle>
              <RowStyle>
                <p>
                  Like our Facebook page and follow us on Twitter and Instagram!
                  This is required.
                </p>
              </RowStyle>
              <div>
                <a
                  href="https://www.facebook.com/DevPointLabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    name="facebook"
                    size="big"
                    style={{ color: `${colors.darkPurp}` }}
                  />
                </a>
                <a
                  href="https://twitter.com/devpointlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    name="twitter"
                    size="big"
                    style={{ color: `${colors.darkPurp}` }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/devpointlabs/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    name="instagram"
                    size="big"
                    style={{ color: `${colors.darkPurp}` }}
                  />
                </a>
              </div>
            </Grid.Column>
          </Grid>
        </GridStyle>
        <div style={{ background: `url(${wallpaper})` }}>
          <GridStyle2>
            <Grid columns={2} style={{ fontFamily: `'Exo 2', sans-serif` }}>
              <Grid.Column mobile={16} tablet={8} computer={7}>
                <Header as="h1" style={{ height: "1.5em", fontFamily: `'Exo 2', sans-serif` }}>
                  Women In Tech Scholarship
                </Header>
                <RowStyle2>
                  <p>
                    From the mid 1800's to 1945 women played a significant role
                    in conceptualizing and developing the computer programming
                    field. Grace Hopper, who served in the Navy, had a
                    breakthrough and built COBOL, the first programming language
                    to use words rather than numbers. It wasn't until the 1980's
                    that women majoring in Computer Science started to decline.
                    We would like to change that. This scholarship is in place
                    to promote more women in computer programming.
                  </p>
                </RowStyle2>
                <BtnStyle>
                  <Button>
                    <Link
                      to="/ScholarshipForm"
                      style={{ color: `${colors.darkPurp}`, }}
                    >
                      Apply
                    </Link>
                  </Button>
                </BtnStyle>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={7}>
                <Header as="h1" style={{ height: "1.5em", fontFamily: `'Exo 2', sans-serif` }}>
                  Opportunity In Tech Scholarship
                </Header>
                <RowStyle2>
                  <p>
                    We believe it's important to support all groups in pursuing
                    a career in tech. With diversity in the workplace we can
                    truly empathize, create, and solve problems for the people
                    we are building products for. We define diversity as all the
                    ways in which we differ. These dimensions include, but are
                    limited to: age, gender, race, sexual orientation, religion,
                    income, mental/physical abilities, ethnic heritage,
                    education, or military experience.
                  </p>
                </RowStyle2>
                <BtnStyle>
                  <Button>
                    <Link
                      to="/ScholarshipForm"
                      style={{ color: `${colors.darkPurp}`, }}
                    >
                      Apply
                    </Link>
                  </Button>
                </BtnStyle>
              </Grid.Column>
            </Grid>
          </GridStyle2>
        </div>
        <Footer />
      </>
    );
  }
}

const colors = {
  darkPurp: `#53407A`
};

const RowStyle2 = styled.div`
  height: 13em
  font-size: 16px
  font-weight: 200
${media.giant`
  margin-top: 2.5em
  height: 16em
`}
${media.tablet`
  height: 14em
  font-size: 14px
`}
${media.phone`
  height: 13em
`}
${media.smPhone`
  height: 14em
`}
${media.xsPhone`
  height: 18em
`}
`;

const RowStyle = styled.div`
  height: 11.5em
  font-size: 16px
  font-weight: 200
${media.giant`
  height: 12.5em
`}
${media.tablet`
  height: 15em
  font-size: 14px
`}
${media.phone`
  height: 7em
`}
${media.smPhone`
  height: 8em
`}
${media.xsPhone`
  height: 9.5em
`}
`;

const HdStyle = styled.div`
  font-size: 26px
  font-weight: bolder
  height: 3em
  ${media.giant`
  height: 3em
  `}
  ${media.tablet`
  font-size: 20px
  `}
  ${media.phone`
  height: 1.5em
  `}
`;

const BtnStyle = styled.div`
float: right
width: 70%
`;

const GridStyle2 = styled.div`
  width: 80%
  margin-left: auto
  margin-right: auto
  padding-top: 3em
  padding-bottom: 4em
  padding-left: 12em
  ${media.giant`
  width: 90%
  padding-left: 8em
  `}
  ${media.tablet`
  width: 90%
  padding-left: 2em
  padding-top: 2em
  padding-bottom: 2em
  `}
  ${media.phone`
  padding-left: 1em  
  `}
`;

const GridStyle = styled.div`
  width: 80%
  margin-left: 13em
  margin-top: 2em
  margin-bottom: 4em
  ${media.giant`
  width: 100%
  margin-left: 2em
  `}
  ${media.tablet`
  margin-bottom: 2em
  `}
  ${media.phone`
  width: 90%
  `}
  ${media.smPhone`
  margin-left: 1em
  `}
`;

const SegStyle = styled.div`
  text-align: center
  padding-top: 3em
  padding-bottom: 5em
  ${media.phone`
  padding-top: 1.5em
  padding-bottom: 2.5em
  `}
`;

const ContentStyle = styled.div`
  width: 40%
  margin-left: auto
  margin-right: auto
  font-size: 16px
  font-weight: 200
  ${media.tablet`
  width: 70%
  `}
  ${media.phone`
  font-size: 14px
  `}
`;

const HeaderStyle = styled.text`
  font-size: 3em
  font-weight: bolder
  ${media.tablet`
  font-size: 2em
  `}
`;

const OvrP = styled.div`
  position: relative;
  background-image: linear-gradient(black, black);
  opacity: 0.9;
  ${media.tablet`
  position: relative;
  width: auto;
  opacity: 0.9
  `}
  ${media.phone`
    position: relative;
    background-image: linear-gradient(black, black);
    width: auto;
    opacity: .9
    height: 500px
  `}
`;

const TeamImage = styled(Image)`
  position: absolute
  width: 100%;
  height: auto;
  opacity: .3;
  z-index: -1;
  ${media.phone`
    width: 900px
    height: 500px
  `}
`;

const BanHead = styled.text`
  font-size: 4em;
  font-weight: bolder;
  color: white;
  position: absolute;
  z-index: 0;
  top: 32%;
  left: 30%;
  transform: translate(-50%, -50%);
  ${media.tablet`
    font-size: 2.5em
  `}
  ${media.phone`
    top: 40%
    left: 40%
  `}
`;

export default DPLScholarships;
