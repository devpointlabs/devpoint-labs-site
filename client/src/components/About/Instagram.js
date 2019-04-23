import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Image, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import MobileInstagram from './MobileInstagram'

const Instagram = () => {
  const [photos, setPhotos] = useState([])
  const width = useWindowWidth()

  useEffect(() => {
    axios
      .get('/api/instagrams')
      .then(res => {
        setPhotos(res.data.data);
      })
  }, [])

  const renderPhotos = () => {
    return (
      <div 
        style={{
          backgroundImage: `linear-gradient(to left, ${colors.purp}, ${
            colors.darkPurp
          })`
        }}
      >
        <GridStyle>
          <Grid stackable columns={4}>
            <Grid.Row style={styles.row}>
              {photos.slice(0, 6).map(photo => {
                return (

                  <Grid.Column key={photo.id}>
                    <ImgStyle>
                      <Image src={photo.images.standard_resolution.url} />
                    </ImgStyle>
                  </Grid.Column>

                )
              })}
              <div style={styles.div}>
                <SegStyle>
                  <Grid stackable columns={2} style={{ margin: '1em', fontFamily: `'Exo 2', sans-serif` }}>
                    <Grid.Column width={10}>
                      <TextStyle>More than just code</TextStyle>
                      <HeaderStyle as='h1' style={{fontFamily: `'Exo 2', sans-serif`}}>You're in good company</HeaderStyle>
                      <TextStyle>Whether you’re a local or coming from out-of-state we blend students 
                      into a vibrant developer community building life long friendships.</TextStyle>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <a href='https://www.instagram.com/devpointlabs/?hl=en' target='_blank' rel="noopener noreferrer">
                        <Icon name='instagram' size='big' style={{ float: 'right', color: `${colors.darkPurp}` }} />
                      </a>
                      <a href='https://www.facebook.com/DevPointLabs/' target='_blank' rel="noopener noreferrer">
                        <Icon name='facebook' size='big' style={{ float: 'right', color: `${colors.darkPurp}` }} />
                      </a>
                    </Grid.Column>
                  </Grid>
                </SegStyle>
              </div>
            </Grid.Row>
          </Grid>
        </GridStyle>
        <LinkStyle>
          <Link to="/ContactUs">
            <p style={{ color: 'white', fontSize: '16px', fontFamily: `'Exo 2', sans-serif` }}>Learn More ></p>
          </Link>
        </LinkStyle>
      </div>
    )
  }

  return (
    <>
      {width >= 500 ?
        <div>
          {renderPhotos()}
        </div>
        :
        <div>
          <MobileInstagram />
        </div>
      }
    </>
  )
}

const colors = {
  darkPurp: `#53407A`,
  purp: `#6E54A3`,
  lightPurp: "#e4dced"
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
`

const HeaderStyle = styled.text`
@media (max-width: 2560px) {
  font-size: 4em
  font-weight: bolder
}

@media (max-width: 2000px) {
  font-size: 2em
}

@media (max-width: 1030px) {
  font-size: 1.2em
}

@media (max-width: 780px) {
  font-size: 1em
}
`

const SegStyle = styled.div`
box-shadow: 2px 3px 8px;
@media (max-width: 2560px) {
  background: ${colors.lightPurp}
  margin-top: 2em
  margin-left: 1em
  margin-right: 1em
  height: 39.5em
}

@media (max-width: 2000px) {
  height: 24.5em
}

@media (max-width: 1500px) {
  height: 20em
}

@media (max-width: 1030px) {
  height: 13em
}

@media (max-width: 780px) {
  height: 11em
}
`

const ImgStyle = styled.div`
box-shadow: 2px 3px 8px;
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
  `

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  div: {
    width: '50%',
    height: '50%',
  },
}

export default Instagram
