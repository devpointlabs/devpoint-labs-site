import React from 'react';
import IDos from './IDos'
import { Button, Divider, Grid, Header, Icon, Search, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import PageOptions from './PageOptions'
import Landing from './Landing'
import Reviews from './Reviews';
import CoursesSection from './CoursesSection';
import CampusTour from './CampusTour';

class Home extends React.Component {

  render() {
    return (
      <>
        <Landing />
        <PageOptions />
        <IDos/>
        <Reviews />
        <CampusTour />
        <CoursesSection />
      </>
    )
  }
}



export default Home