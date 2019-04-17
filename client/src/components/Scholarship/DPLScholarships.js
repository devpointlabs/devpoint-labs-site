import React from 'react'
import Footer from '../MAIN/Footer'
import dayinlife from "../../assets/images/coderscropped.jpg";
import styled from "styled-components";
import { media, } from "../../theme/media";
import { Image, Grid, Icon, Header, Button, } from "semantic-ui-react";
import { Link } from 'react-router-dom'

class DPLScholarships extends React.Component {
  render() {
    return (
      <>
        <OvrP>
          <TeamImage src={dayinlife} />
          <BanHead>
            DevPoint Labs <br /> Scholarships
        </BanHead>
        </OvrP>
        <SegStyle>
          <HeaderStyle>About</HeaderStyle>
          <br />
          <br />
          <ContentStyle>We're exicted to offer two scholarships for our Full-Time ProEd Web Development
             and Part-Time Web Development Courses. We will be awarding 50% off tuition for
             both scholarship recipients. We are looking for individuals who demonstrate
             a passion for...</ContentStyle>
        </SegStyle>
        <div style={{ textAlign: 'center' }}>
          <br />
          <HeaderStyle style={{ textDecoration: 'underline' }}>How To Apply</HeaderStyle>
        </div>
        <GridStyle>
          <Grid stackable columns={6}>
            <Grid.Column width={1}>
              <Icon name='server' size='big' />
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as='h2'>Electrical engineering</Header>
              <RowStyle>
              <p>In technology research, a technology demonstrator is a prototype serving
               as proof-of-concept and demonstration model for a new technology</p>
              </RowStyle>
              <Link>First Link ></Link>
            </Grid.Column>
            <Grid.Column width={1}>
              <Icon name='th' size='big' />
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as='h2'>Computer programming</Header>
              <RowStyle>
              <p>Often the end users may not be able to provide a complete set of application
                 objectives, detailed input, processing, or output requirements in the
               initial stage</p>
              </RowStyle>
              <Link>Second Link ></Link>
            </Grid.Column>
            <Grid.Column width={1}>
              <Icon name='database' size='big' />
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as='h2'>Data prototyping</Header>
              <RowStyle>
              <p>In large development projects, a testbed is a platform and prototype
                 development environment for rigorous experimentation and testing of new
               technologies</p>
              </RowStyle>
              <Link>Third Link ></Link>
            </Grid.Column>
          </Grid>
        </GridStyle>
        <GridStyle2>
          <Grid columns={2}>
            <Grid.Column mobile={16} tablet={8} computer={7}>
              <Header as='h1' style={{height: '1.5em'}}>
                Women In Tech Scholarship
              </Header>
              <RowStyle2>
              <p>
                <Icon name='check circle outline' />
                The range of functions available
              </p>
              <p>
                <Icon name='check circle outline' />
                The effect of different scenarios on the display
              </p>
              <p>
                <Icon name='check circle outline' />
                The relative priorities of the information
              </p>
              <p>
                <Icon name='check circle outline' />
                Researching about the target audience
              </p>
              </RowStyle2>
              <BtnStyle>
              <Button>Button</Button>
              </BtnStyle>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={7}>
              <Header as='h1' style={{height: '1.5em'}}>
                Opportunity In Tech Scholarship
              </Header>
              <RowStyle2>
              <p>
                <Icon name='check circle outline' />
                Understanding the company's business goals
              </p>
              <p>
                <Icon name='check circle outline' />
                Understanding the company's business goals                
              </p>
              <p>
                <Icon name='check circle outline' />
                Collecting information about the problem
              </p>
              <p>
                <Icon name='check circle outline' />
                User-Flow diagrams and navigation maps
              </p>
              </RowStyle2>
              <BtnStyle>
              <Button>Button</Button>
              </BtnStyle>
            </Grid.Column>
          </Grid>
        </GridStyle2>
        <Footer />
      </>
    )
  }
}

const RowStyle2 = styled.div`
  height: 10em
${media.giant`
  margin-top: 2.5em
`}
${media.xsPhone`
  height: 12em
`}
`

const RowStyle = styled.div`
  height: 7em
${media.giant`
  height: 10em
`}
${media.tablet`
  height: 13em
`}
${media.phone`
  height: 5em
`}
${media.smPhone`
  height: 5.5em
`}
${media.xsPhone`
  height: 7em
`}
`

const BtnStyle = styled.div`
float: right
width: 80%
  ${media.giant`
    width: 70%
  `}
`

const GridStyle2 = styled.div`
  width: 80%
  margin-left: auto
  margin-right: auto
  margin-top: 3em
  margin-bottom: 4em
  padding-left: 12em
  ${media.giant`
  width: 90%
  padding-left: 8em
  `}
  ${media.tablet`
  width: 100%
  padding-left: 3em
  margin-top: 2em
  margin-bottom: 2em
  `}
  ${media.smPhone`
  padding-left: 2em  
  `}
`

const GridStyle = styled.div`
  width: 80%
  margin-left: auto
  margin-right: auto
  margin-top: 3em
  margin-bottom: 4em
  ${media.tablet`
  width: 90%
  margin-top: 2em
  margin-bottom: 2em
  `}
`

const SegStyle = styled.div`
  text-align: center
  background: gainsboro
  padding-top: 3em
  padding-bottom: 5em
  ${media.phone`
  padding-top: 1.5em
  padding-bottom: 2.5em
  `}
`

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
`

const HeaderStyle = styled.text`
  font-size: 3em
  font-weight: 600
  ${media.phone`
  font-size: 2em
  `}
`

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

const TeamImage = styled(Image)`
  position: absolute
  width: 100%;
  height: auto;
  opacity: .3;
  z-index: -1;
  ${media.phone`
  `}
`;

const BanHead = styled.text`
  font-size: 4em;
  font-weight: 600;
  color: white;
  position: absolute;
  z-index: 0;
  top: 32%;
  left: 15%;
  transform: translate(-50%, -50%);
  ${media.tablet`
    font-size: 2em
    margin-left: 90px
  `}
  ${media.phone`
    font-size: 2em
    margin-left: 90px
  `}
  ${media.giant`
    font-size: 2em
    padding-top: 0
  `}
`;

export default DPLScholarships