import React from 'react'
import { Button, Divider, Grid, Segment, Icon, Container } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap'

class Reviews extends React.Component {
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
              <div style={{ margin: '5%'}}>
                <Grid columns={2} relaxed='very' style={{ textAlign: 'center', }} divided>
                  <Grid.Column>
                    <Icon name='user circle outline' size='big' />
                    <p>This course is difficult but rewarding if your willing to put in the effort and time. Instructor and the staff is awesome but if you dont give it your all that all means nothing. It was an awesome experience for me overall. I highly recommend this course!</p>
                    <h3>Usong Cho</h3>
                    <p>U of U Full-Time Student</p>
                  </Grid.Column>

                  <Grid.Column>
                    <Icon name='user circle outline' size='big' />
                    <p>It was incredibly challenging and satisfying. The curriculum was difficult but there was always consistent and relevant support from the instructors, the TAs as well as the active mentors. I would do it again.</p>
                    <h3>Bryan Holbrook</h3>
                    <p>Co-founder of Forma DS</p>
                  </Grid.Column>
                </Grid>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div style={{ margin: '5%'}}>
                <Grid columns={2} relaxed='very' style={{ textAlign: 'center'}} divided>
                  <Grid.Column>
                    <Icon name='user circle outline' size='big' />
                    <p>I graduated from DevPoint Labs in January '18, and just over a year later it's proven to be one of the best decisions I have ever made in my career. The DPL fulltime full stack course offers quality, relevant content and tons of hands on experience and mentorship over the course of an intensive 11 weeks.</p>
                    <h3>Dan</h3>
                    <p>Full Stack Software Engineer</p>
                  </Grid.Column>

                  <Grid.Column verticalAlign='middle'>
                    <a href='https://www.coursereport.com/schools/devpoint-labs#/reviews' target='_blank'>
                      <Button inverted color='blue'>See more Reviews</Button>
                    </a>
                  </Grid.Column>
                </Grid>
              </div>
            </Carousel.Item>
          </Carousel>
    )
  }
}

export default Reviews