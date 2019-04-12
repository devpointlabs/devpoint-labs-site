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
    <>
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
      <Segment style={{ background: 'lightblue' }}>
        <TextStyle>Tagline</TextStyle>
        <HeaderStyle as='h1'>You're in good company</HeaderStyle>
        <TextStyle>When applied to building block a website or similar work product,
                      a Visual Guide can be an intermediate step toward.</TextStyle>
        <br />
        <a href='https://www.instagram.com/devpointlabs/?hl=en' target='_blank'>
          <Icon name='instagram' size='big' style={{ float: 'right' }} />
        </a>
        <a href='https://www.facebook.com/DevPointLabs/' target='_blank'>
          <Icon name='facebook' size='big' style={{ float: 'right' }} />
        </a>
        <Link to='/'>
          <p>Learn More ></p>
        </Link>
      </Segment>
    </>
  )
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