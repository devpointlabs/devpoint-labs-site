import React from 'react'
import request from 'superagent'
import { Image, Grid, Segment, Container, Header, Icon } from 'semantic-ui-react'
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
                <ImgStyle>
                  <Image src={photo.images.standard_resolution.url} />
                </ImgStyle>
                </Grid.Column>
              ))}
              <div style={styles.div}>
              <SegStyle>
                  <ColStyle>
                  <Grid stackable columns={2} style={{ margin: '1em', }}>
                    <Grid.Column width={10}>
                      <TextStyle>Tagline</TextStyle>
                      <HeaderStyle as='h1'>You're in good company</HeaderStyle>
                      <TextStyle>When applied to building block a website or similar work product,
                      a Visual Guide can be an intermediate step toward.</TextStyle>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <a href='https://www.instagram.com/devpointlabs/?hl=en' target='_blank'>
                        <Icon name='instagram' size='big' style={{ float: 'right' }} />
                      </a>
                      <a href='https://www.facebook.com/DevPointLabs/' target='_blank'>
                        <Icon name='facebook' size='big' style={{ float: 'right' }} />
                      </a>
                    </Grid.Column>
                  </Grid>
                  </ColStyle>
              </SegStyle>
              </div>
            </Grid.Row>
          </Grid>
        </GridStyle>
        <LinkStyle>
        <Link to='/'>
          <p>Learn More ></p>
        </Link>
        </LinkStyle>
      </Segment>
    )
  }
}

const LinkStyle = styled.div`
@media (max-width: 2560px) {
  text-align: center
  padding: 2em
  font-size: 2em
}

@media (max-width: 2000px) {
  font-size: 1.25em
}

@media (max-width: 1030px) {
  font-size: 1em
}
`

const ColStyle = styled.div`
@media (max-width: 450px) {
  margin: 1em
}
`

const TextStyle = styled.text`
@media (max-width: 2560px) {
  font-size: 2em
}

@media (max-width: 2000px) {
  font-size: 1em
}

@media (max-width: 1030px) {
  font-size: 0.8em
}

@media (max-width: 780px) {
  font-size: 0.6em
}

@media (max-width: 450px) {
  font-size: 0.8em
}
`

const HeaderStyle = styled.text`
@media (max-width: 2560px) {
  font-size: 5em
  font-weight: bold
}

@media (max-width: 2000px) {
  font-size: 2.5em
}

@media (max-width: 1030px) {
  font-size: 1.2em
}

@media (max-width: 780px) {
  font-size: 1em
}

@media (max-width: 450px) {
  font-size: 1.2em
}
`

const SegStyle = styled.div`
@media (max-width: 2560px) {
  background: lightblue
  margin-top: 2em
  margin-left: 1em
  margin-right: 1em
  height: 39.5em
}

@media (max-width: 2000px) {
  height: 20em
}

@media (max-width: 1030px) {
  height: 13em
}

@media (max-width: 780px) {
  height: 11em
}

@media (max-width: 450px) {
  margin-left: -12em
  height: 14em
}

@media (max-width: 380px) {
  margin-left: -10em
}

@media (max-width: 320px) {
  margin-left: -8.5em
  height: 15em
}
`

const ImgStyle = styled.div`
@media (max-width: 2560px) {
  margin-top: 2em
}

@media (max-width: 1030px) {
  margin-bottom: 0
}
`

const GridStyle = styled.div`
  @media (max-width: 2560px) {
    padding-top: 2em
    padding-left: 9em
    padding-right: 7em  
  }
  
  @media (max-width: 1030px) {
    padding-top: 1.5em
    padding-left: 8em
    padding-right: 6em  
  }
  
  @media (max-width: 780px) {
    padding-top: 0
    padding-left: 3em
    padding-right: 0.5em  
  }
  
  @media (max-width: 450px) {
    padding-top: 1.5em
    padding-left: 1em
    padding-right: 1em  
  }
`

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  // p: {
  //   textAlign: 'center',
  //   padding: '3.5em',
  // },
  div: {
    width: '50%',
    height: '50%',
  },
}

export default Instagram
