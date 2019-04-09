import React from 'react';
import IDos from './IDos'
import { Button, Divider, Grid, Header, Icon, Search, Segment, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import PageOptions from './PageOptions'
import Landing from './Landing'
import Reviews from './Reviews';
import CoursesSection from './CoursesSection';
import CampusTour from './CampusTour';
import HomeLogos from './HomeLogos';
import { media } from '../theme/media'


class Home extends React.Component {
  render() {
    return (
      <div as={BackgroundStyles}>
        <Landing />
        <ContainerStyles>
          <HomeLogos />
          <PageOptions />
          <IDos/>
          <Reviews />
          <CampusTour />
          <CoursesSection />
        </ContainerStyles>
      </div>
    );
  }
}

const BackgroundStyles = styled.div`
  background: url('https://www.hallevans.com/wp-content/uploads/2019/02/SLC_Media.jpg') !important
  background-position: center !important
  background-repeat: no-repeat !important
  background-size: cover !important
  height: 60em
`

const ContainerStyles = styled(Container)`
  ${media.phone`
    width: 100% !important
    background: url('https://www.hallevans.com/wp-content/uploads/2019/02/SLC_Media.jpg') !important
    background-position: center !important
    background-repeat: no-repeat !important
    background-size: cover !important
    height: 50em
    transform: translate(0, 2em)
  `}
`

export default Home;
