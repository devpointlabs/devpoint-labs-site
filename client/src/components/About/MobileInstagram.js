import React, { useState, useEffect } from 'react'
import { Image, Icon, Segment } from 'semantic-ui-react'
import axios from 'axios'
import { Carousel } from "react-bootstrap"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MobileInstagram = () => {
  const [photos, setPhotos] = useState([])
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('null')

  useEffect(() => {
    axios
      .get('/api/instagrams')
      .then(res => {
        setPhotos(res.data.data);
      })
  }, [])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  return (
    <div 
      style={{
        backgroundImage: `linear-gradient(to left, ${colors.purp}, ${
          colors.darkPurp
        })`
      }}
    >
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        {photos.slice(0, 6).map(photo => (
          <Carousel.Item>
            <div key={photo.id}>
              <Image src={photo.images.standard_resolution.url} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Segment 
        style={{ 
          background: `${colors.lightPurp}`, 
          boxShadow: '2px 3px 8px'
        }}>
        <TextStyle>Tagline</TextStyle>
        <HeaderStyle as='h1'>You're in good company</HeaderStyle>
        <TextStyle>When applied to building block a website or similar work product,
                      a Visual Guide can be an intermediate step toward.</TextStyle>
        <br />
        <a href='https://www.instagram.com/devpointlabs/?hl=en' target='_blank' rel="noopener noreferrer">
          <Icon name='instagram' size='big' style={{ float: 'right', color: `${colors.darkPurp}` }} />
        </a>
        <a href='https://www.facebook.com/DevPointLabs/' target='_blank' rel="noopener noreferrer">
          <Icon name='facebook' size='big' style={{ float: 'right', color: `${colors.darkPurp}` }} />
        </a>
        <Link to='/'>
          <p style={{ color: `${colors.darkPurp}` }}>Learn More ></p>
        </Link>
      </Segment>
    </div>
  )
}

const colors = {
  darkPurp: `#53407A`,
  purp: `#6E54A3`,
  lightPurp: "#e4dced"
}

const TextStyle = styled.div`
  @media (max-width: 500px) {
      font-size: 0.8em
  }
`

const HeaderStyle = styled.div`
  @media (max-width: 500px) {
      font-size: 1.2em
      font-weight: bold
  }
`

export default MobileInstagram