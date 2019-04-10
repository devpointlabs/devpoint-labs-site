import React from 'react'
// import axios from 'axios'
import request from 'superagent'
import { List, Image, Grid, Segment } from 'semantic-ui-react'

class Instagram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      count: 6
    }
  }

  // state = { photos: [], }

  // componentDidMount() {
  //   axios.get('/api/instagrams')
  //     .then( res => this.setState({ photos: res.data }))
  // }

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
    return (
      <Segment>
        <Grid columns={4}>
          <Grid.Row>
        {this.state.photos.slice(0, 6).map( photo => (
          <Grid.Column key={photo.id}>
          <Image src={photo.images.standard_resolution.url} />
          </Grid.Column>
        ))}
        </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Instagram

{/* <Grid.Column key={photo.id}>
  <Image src={photo.images.standard_resolution.url} />
</Grid.Column> */}