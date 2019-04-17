import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import bGPic from '../../assets/images/UPic-min.png'
import ScholarshipPic from '../../assets/images/applying-min.png'
import StudentHousingPic from '../../assets/images/studenthousing-min.jpg'
import styled from 'styled-components'
import { media } from '../../theme/media'

class PageOptions extends React.Component {
  state = {
    bG: 0,
    bGBoolean: false
  }

  handleBackground1 = () => {
    this.setState({ bG: 1})
    console.log('Showing Background 1')
  }

  handleBackground2 = () => {
    this.setState({ bG: 2})
    console.log('Showing Background 2')
  }

  handleBackground3 = () => {
      this.setState({ bG: 3})
      console.log('Showing Background 3')
    }

  handleLeave = () => {
    this.setState({ bG: 0})
  }

  render() {
    const { bG } = this.state

    return (
      <>
        <Grid
          columns={3}
          stackable
          class="ui equal width grid"
          style={{ boxShadow: `0 1em 1em ${colors.darkGrey}`}}
        >
        {(() => {
          switch(bG) {
            case 1:
              return <div style={{
                        background: `linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${bGPic})`, 
                        backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat !important', 
                        height: `30em`, 
                        width: '100%', 
                        position: 'absolute', 
                        transform: 'translate(1em, 1em)'
                      }}>
                      </div>  
            case 2:
              return <div style={{
                        background: `linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${ScholarshipPic})`, 
                        backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat !important', 
                        height: `30em`, 
                        width: '100%', 
                        position: 'absolute', 
                        transform: 'translate(1em, 1em)'
                      }}>
                      </div>  
            case 3:
              return <div style={{
                        background: `linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${StudentHousingPic})`, 
                        backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat !important', 
                        height: `30em`, 
                        width: '100%', 
                        position: 'absolute', 
                        transform: 'translate(1em, 1em)'
                      }}>
                      </div>  
            default:
              return null
          }
        })()}
          <Grid.Row style={{ display: 'flex', alignItems: 'center'}}>
              <Grid.Column 
                onMouseEnter={this.handleBackground1} 
                onMouseLeave={() => this.handleLeave()} 
                style={ 
                  (bG === 0) ? {
                    backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${bGPic})`,
                    backgroundSize: 'cover', 
                    backgroundRepeat: 'no-repeat', 
                    height: '30em', 
                    paddingLeft: '4%', 
                    paddingRight: '2%', 
                    opacity: '.95'
                    }
                    :
                    {
                      background: 'none',
                      height: '30em', 
                      paddingLeft: '4%', 
                      paddingRight: '2%', 
                      opacity: '.95'
                    }
                  }>
                  {
                    (bG !== 2 && bG !== 3) ? 
                    <>
                      <Icon name="university" size="big" style={{ marginLeft: "49%", marginTop: '20%', color: "white" }} />
                      <Header inverted as="h2" textAlign="center">
                        University Partner
                      </Header>
                      <p style={{ textAlign: "center", fontSize: "1.2em", color: 'white' }}>
                        Learn the skills in web development to earn a <br/> University of Utah
                        Professional Education endorsed certificate powered by DevPoint
                        Labs.
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "1.2em"
                        }}
                        >
                        <a href="https://devpointlabs.continue.utah.edu/" target="_blank" rel="noopener noreferrer">
                          More Info
                        </a>
                      </p>
                    </>
                    :
                    null
                  }
              </Grid.Column>
            <Grid.Column 
              onMouseEnter={this.handleBackground2} 
              onMouseLeave={() => this.handleLeave()} 
              style={
                (bG === 0) ? {
                  backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${ScholarshipPic})`,
                  height: '30em', 
                  paddingRight: '3%', 
                  paddingLeft: '2.5%', 
                  opacity: '.95'
                }
                :
                {
                  height: '30em', 
                  paddingRight: '3%', 
                  paddingLeft: '2.5%', 
                  opacity: '.95'
                }}>
                {
                  (bG !== 1 && bG !== 3) ? 
                    <>
                      <Icon name="student" size="big" style={{ marginLeft: "47%", marginTop: '20%', color: "white" }} />
                      <Header inverted as="h2" textAlign="center">
                        Financing And Scholarships
                      </Header>
                      <p style={{ textAlign: "center", fontSize: "1.2em", color: "white" }}>
                        We're excited to offer two scholarships for our Full-Time ProEd
                        Web Development and Part-Time Web Development classes.
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "1.2em"
                        }}
                      >
                        <Link to="/DPLScholarships">More Info</Link>
                      </p>
                    </>
                    :
                    null
                  }
            </Grid.Column>
            <Grid.Column 
              onMouseEnter={this.handleBackground3} 
              onMouseLeave={() => this.handleLeave()} 
              style={
                (bG === 0) ? {
                  backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${StudentHousingPic})`, 
                  height: '30em', 
                  opacity: '.95'
                }
                :
                {
                  height: '30em', 
                  opacity: '.95'
                }}>
                {
                  (bG !== 1 && bG !== 2) ? 
                  <>
                    <Icon name="home" size="big" style={{ marginLeft: "47%", marginTop: '20%', transform: 'translate(0, .25em)', color: 'white' }} />
                    <Header inverted as="h2" textAlign="center" style={{ marginLeft: "10px" }}>
                      Free Student Housing
                    </Header>
                    <p style={{ textAlign: "center", fontSize: "1.2em", color: 'white' }}>
                      The DevHouse - Fully furnished free <br/> student housing steps away
                      from campus.
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "1.2em"
                      }}
                    >
                      <Link to="/StudentHousing">More Info</Link>
                    </p>
                  </>
                  :
                  null
                }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

const colors = {
  black: `#141414`,
  darkGrey: `#2d2d2d`,
  grey: `#757575`,
  darkPurp: `#53407A`,
  purp: `#6E54A3`,
  white: `#FFFFFF`
}

const OvrP = styled.div`
  position: relative;
  background-image: linear-gradient(grey, black);
  opacity: 0.9;
  ${media.tablet`
  position: relative;
  width: auto;
  opacity: 0.9
  `}
  ${media.phone`
    position: relative;
    background: #6E54A3;
    width: auto;
    opacity: 1
    height: 500px
  `}
`;

export default PageOptions;
