import React from 'react';
import IDos from './IDos'
import { Button, Divider, Grid, Header, Icon, Search, Segment, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import PageOptions from './PageOptions'
import Landing from './Landing'
import Reviews from './Reviews';
import CoursesSection from './CoursesSection';
import CampusTour from './CampusTour';
import { media } from '../theme/media'
import ScholarshipAbout from './ScholarshipAbout';


class Home extends React.Component {
  render() {
    return (
      <>
        <ContainerStyles>
          <Landing />
          <PageOptions />
          <IDos/>
          <Reviews />
          <CampusTour />
          <CoursesSection />
          <ScholarshipAbout />
        </ContainerStyles>
      </>
    );
  }
}

const ContainerStyles = styled(Container)`
  ${media.phone`
    width: 100% !important
    background: url('https://www.desertjet.com/app/uploads/2015/10/placeholder-vertical.jpg') !important
    background-position: center !important
    background-repeat: no-repeat !important
    background-size: cover !important
    height: 50em
    transform: translate(0, 2em)
  `}
`

export default Home;
