import React from 'react';
import IDos from './IDos'
import { Button, Divider, Grid, Header, Icon, Search, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import PageOptions from './PageOptions'
import Landing from './Landing'

class Home extends React.Component {

  render() {
    return (
      <>
      <Landing />
      <IDos/>
      </>
    )
  }
}



export default Home