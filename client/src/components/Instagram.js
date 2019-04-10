import React from 'react'
import request from 'superagent'
import { Image, Grid, Segment, Container, Header, Icon  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Instagram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
  }

  componentWillMount() {
    this.fetchPhotos()
  }

  fetchPhotos() {
    request
      .get('/api/instagrams')
      .then((res) => {
        this.setState({
          photos: res.body.data
        })
      })
  }

  render() {
    const { photos } = this.state
    return (
      <Segment style={{ background: 'gainsboro' }}>
      <GridStyle>
        <Grid stackable columns={4}>
          <Grid.Row style={styles.row}>
            {photos.slice(0, 6).map(photo => (
              <Grid.Column key={photo.id}>
                <Image src={photo.images.standard_resolution.url} />
              </Grid.Column>
            ))}
            {/* <div style={styles.div}>
            <Segment style={styles.seg}>
            <Grid stackable columns={2} style={{margin: '1em'}}>
            <Grid.Column width={9}>
            <p>Tagline</p>
            <Header style={{fontSize: '3em'}}>You're in good company</Header>
            <p>When applied to building block a website or similar work product, 
            a Visual Guide can be an intermediate step toward.</p>
            </Grid.Column>
            <Grid.Column width={7}>
            <a href='https://www.instagram.com/devpointlabs/?hl=en' target='_blank'>
            <Icon name='instagram' size='big' style={{float: 'right'}} />
            </a>
            <a href='https://www.facebook.com/DevPointLabs/' target='_blank'>
            <Icon name='facebook' size='big' style={{float: 'right'}} />
            </a>
            </Grid.Column>
            </Grid>
            </Segment>
          </div> */}
          </Grid.Row>
        </Grid>
          </GridStyle>
        {/* <Link to='/'>
          <p style={styles.p}>Learn More ></p>
        </Link> */}
      </Segment>
    )
  }
}

const GridStyle = styled.div`
  @media (max-width: 2560px) {
    paddingTop: 2em,
    paddingLeft: 9em,
    paddingRight: 7em  
  }
  
  @media (max-width: 1500px) {
    paddingTop: 2em,
    paddingLeft: 9em,
    paddingRight: 7em  
  }
  
  @media (max-width: 1030px) {
    paddingTop: 2em,
    paddingLeft: 9em,
    paddingRight: 7em  
  }
  
  @media (max-width: 780px) {
    paddingTop: 2em,
    paddingLeft: 9em,
    paddingRight: 7em  
  }
  
  @media (max-width: 450px) {
    paddingTop: 2em,
    paddingLeft: 9em,
    paddingRight: 7em  
  }
  
  @media (max-width: 380px) {
    paddingTop: 2em,
    paddingLeft: 9em,
    paddingRight: 7em  
  }
  
`

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  // grid: {
  //   paddingTop: '2em',
  //   paddingLeft: '9em',
  //   paddingRight: '7em',
  // },
  // p: {
  //   textAlign: 'center',
  //   padding: '3.5em',
  // },
  // div: {
  //   width: '50%',
  //   height: '50%',
  // },
  // seg: {
  //   margin: '1em',
  //   height: '24em',
  //   background: 'lightblue'
  // }
}

export default Instagram
