import React, { useState } from 'react'
import { Carousel } from "react-bootstrap"
import { Icon, Button, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const MobileReviews = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('null')

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  return (
    <>
      <SegStyle style={{ background: `linear-gradient(to bottom, ${colors.darkGrey}, ${colors.black})`, color: `${colors.white}`, fontFamily: `'Exo 2', sans-serif` }}>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <RevStyle>
              <Icon as={IconStyle} name="user circle outline" size="big" />
              <br />
              <br />
              <p style={{ color: `${colors.lightPurp}`}}>
                This course is difficult but rewarding if you're willing to
                put in the effort and time. Instructor and the staff is
                awesome but if you dont give it your all that all means
                nothing. It was an awesome experience for me overall. I
                highly recommend this course!
                    </p>
              <h3 color="#2d2d2d">Usong Cho</h3>
              <p style={{ color: `${colors.lightPurp}`, opacity: '.6'}}>U of U Full-Time Student</p>
            </RevStyle>
          </Carousel.Item>
          <Carousel.Item>
            <RevStyle>
              <Icon as={IconStyle} name="user circle outline" size="big" />
              <br />
              <br />
              <p style={{ color: `${colors.lightPurp}`}}>
                It was incredibly challenging and satisfying. The
                curriculum was difficult but there was always consistent
                and relevant support from the instructors, the TAs as well
                as the active mentors. I would do it again.
                    </p>
              <h3>Bryan Holbrook</h3>
              <p style={{ color: `${colors.lightPurp}`, opacity: '.6'}}>Co-founder of Forma DS</p>
            </RevStyle>
          </Carousel.Item>
          <Carousel.Item>
            <RevStyle>
              <Icon as={IconStyle} name="user circle outline" size="big" />
              <br />
              <br />
              <p style={{ color: `${colors.lightPurp}`}}>
                I graduated from DevPoint Labs in January '18, and just
                over a year later it's proven to be one of the best
                decisions I have ever made in my career. The DPL fulltime
                full stack course offers quality, relevant content and
                tons of hands on experience and mentorship over the course
                of an intensive 11 weeks.
                    </p>
              <h3>Dan</h3>
              <p style={{ color: `${colors.lightPurp}`, opacity: '.6'}}>Full Stack Software Engineer</p>
            </RevStyle>
          </Carousel.Item>
        </Carousel>
      <div style={{ textAlign: 'center' }}>
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
      </SegStyle>
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
  color: ${colors.purp}
  opacity: .6 !important
`

const SegStyle = styled(Segment)`
  width: 100%
  font-size: 16px
  text-align: center
  font-weight: 200
  height: 27em
`
const RevStyle = styled.div`
  height: 22em
  width: 80%
  margin-left: auto
  margin-right: auto
`

export default MobileReviews