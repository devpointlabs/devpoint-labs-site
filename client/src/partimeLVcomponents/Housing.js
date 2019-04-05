import React from 'react'
import { Button, Grid, Segment, Icon, Image } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

class FreeHousing extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <Image
            centered
            size='big'
            src="https://strattonhats.com/wp-content/uploads/IMG_1416.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <TextStyles>Getting Ready To Design</TextStyles>
            <PStyles>After research, the designer must make sense of the data they've collected</PStyles>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            centered
            size='big'
            src="https://strattonhats.com/wp-content/uploads/IMG_1416.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <TextStyles>Getting Ready To Design</TextStyles>
            <PStyles>Someone else's quote</PStyles>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            centered
            size='big'
            src="https://strattonhats.com/wp-content/uploads/IMG_1416.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <TextStyles>Getting Ready To Design</TextStyles>
            <PStyles>
              Yet another meaningful saying
            </PStyles>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

const TextStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: blue;
    font-size: 4em;
    font-weight: 10;
    margin-bottom: 20px;
  
`
const PStyles = styled.div`
    color: blue;
    font-size: 1.5em;
    margin-bottom: 120px;
`
  
export default FreeHousing