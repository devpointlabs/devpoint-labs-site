import React, { useState } from "react";
import { Button, Grid, Segment, Icon, } from "semantic-ui-react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import { useWindowWidth } from '../../hooks/useWindowWidth'
import MobileReviews from './MobileReviews'

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('null')
  const width = useWindowWidth()

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  const renderReviews = () => {
    return (
      <SegStyle style={{ background: `${colors.white}`, color: `${colors.darkPurp}`, boxShadow: `0em .5em 1em ${colors.darkGrey}` }}>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <Grid
              stackable
              columns={2}
              divided
            >
              <Grid.Column>
                <ColStyle>
                  <Icon as={IconStyle} name="user circle outline" size="big" />
                  <br />
                  <br />
                  <RightText style={{ color: `${colors.purp}`}}>
                    This course is difficult but rewarding if you're willing to
                    put in the effort and time. Instructor and the staff is
                    awesome but if you dont give it your all that all means
                    nothing. It was an awesome experience for me overall. I
                    highly recommend this course!
                  </RightText>
                  <br />
                  <h3>Usong Cho</h3>
                  <p style={{ color: `${colors.purp}`, opacity: '.6'}}>U of U Full-Time Student</p>
                </ColStyle>
              </Grid.Column>

              <Grid.Column>
                <ColStyle>
                  <Icon as={IconStyle} name="user circle outline" size="big" />
                  <br />
                  <br />
                  <LeftText style={{ color: `${colors.purp}`}}>
                    It was incredibly challenging and satisfying. The
                    curriculum was difficult but there was always consistent
                    and relevant support from the instructors, the TAs as well
                    as the active mentors. I would do it again.
                  </LeftText>
                  <br />
                  <h3>Bryan Holbrook</h3>
                  <p style={{ color: `${colors.purp}`, opacity: '.6'}}>Co-founder of Forma DS</p>
                </ColStyle>
              </Grid.Column>
            </Grid>
          </Carousel.Item>

          <Carousel.Item>
            <Grid
              stackable
              columns={2}
              relaxed="very"
              style={{ textAlign: "center" }}
              divided
            >
              <Grid.Column>
                <ColStyle>
                  <Icon as={IconStyle} name="user circle outline" size="big" />
                  <br />
                  <br />
                  <RightText style={{ color: `${colors.purp}`}}>
                    I graduated from DevPoint Labs in January '18, and just
                    over a year later it's proven to be one of the best
                    decisions I have ever made in my career. The DPL fulltime
                    full stack course offers quality, relevant content and
                    tons of hands on experience and mentorship over the course
                    of an intensive 11 weeks.
                  </RightText>
                  <br />
                  <h3>Dan</h3>
                  <p style={{ color: `${colors.purp}`, opacity: '.6'}}>Full Stack Software Engineer</p>
                </ColStyle>
              </Grid.Column>

              <Grid.Column style={{width: '50%', marginTop: 'auto', marginBottom: 'auto'}}>
                <div>
                  <a
                    href="https://www.coursereport.com/schools/devpoint-labs#/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="grey" style={{ fontFamily: `'Exo 2', sans-serif` }}>
                      See more Reviews
                    </Button>
                  </a>
                </div>
              </Grid.Column>
            </Grid>
          </Carousel.Item>
        </Carousel>
      </SegStyle>
    );
  }

  return (
    <>
      {width >= 500 ?
        <div>
          {renderReviews()}
        </div>
        :
        <div>
          <MobileReviews />
        </div>
      }
    </>
  )
}

const colors = {
  black: `#141414`,
  darkGrey: `#2d2d2d`,
  grey: `#757575`,
  darkPurp: `#53407A`,
  purp: `#6E54A3`,
  white: `#FFFFFF`,
  lightPurp: '#e4dced',
}

const IconStyle = styled(Icon)`
  color: ${colors.darkPurp}
`

const ColStyle = styled.div`
  margin-top: 2em
@media (max-width: 2600px) {
    height: 20em;
  }

  @media (max-width: 1600px) {
    height: 18em;
  }

  @media (max-width: 1250px) {
    height: 21em;
  }

  @media (max-width: 800px) {
    height: 26em;
  }
`

const SegStyle = styled(Segment)`
  width: 100%
  font-size: 16px
  text-align: center
  font-weight: 200

  @media (max-width: 2600px) {
    height: 24em;
  }

  @media (max-width: 1600px) {
    height: 25em;
  }

  @media (max-width: 1250px) {
    height: 26em;
  }

  @media (max-width: 800px) {
    height: 30em;
  }
`

const RightText = styled.text`
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1250px) {
    width: 60%
    margin-right: 15%
  }
`;

const LeftText = styled.text`
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1250px) {
    width: 60%
    margin-left: 15%
  }
`;

export default Reviews;
