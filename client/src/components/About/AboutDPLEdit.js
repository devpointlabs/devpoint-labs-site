import React from "react";
import { Header, Container, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import axios from 'axios'
import { Link } from 'react-router-dom'

class AboutDPL extends React.Component {
  state = { abouts: [], }

  componentDidMount() {
    axios.get(`/api/abouts`)
      .then(res => {
        this.setState({ abouts: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  handleDelete = (id) => {
    axios.delete(`/api/abouts/${id}`)
      .then(res => {
        const { abouts } = this.state
        this.setState({ abouts: abouts.filter(t => t.id !== id) })
      })
  }

  render() {
    const { abouts } = this.state

    return (
      <> 
      <Link to='/AboutForm'>
        <Button>
          <Icon name='add square' />
          Add Content To About DPL
        </Button>
      </Link>
        <Container style={{ width: "55%" }}>
          <AbText>ABOUT</AbText>
          <DevHead as="h1">DevPoint Labs</DevHead>
          <br />
      {abouts.map(about =>
          <div key={about.id}>
          <AbBody>
            {about.abBody1}
          </AbBody>
          <br />
          <br />
          <AbBody>
            {about.abBody2}
          </AbBody>
          <AbBody>
            {about.abBody3}
          </AbBody>
          <br />
          <br />
          <Button>
            <Link to={`/About/${about.id}/edit`} as={Button}>
              <Icon name='edit' size='small' />
              Edit Content of About DPL
            </Link>
          </Button>
          <br />
          <br />
          <Button onClick={() => this.handleDelete(about.id)}>
            <Icon name='trash' size='small' />
            Delete Content of About DPL
          </Button>
          </div>
      )}
        </Container>
      </>
    )
  }
}

const DevHead = styled(Header)`
  font-size: 38px;
  text-align: center;
  font-style: italic;
  font-weight: 500;
`;

const AbText = styled.p`
  font-size: 15px;
  text-align: center;
  padding-top: 60px
  padding-bottom: 0;
  line-height: 0;
  font-weight: 600;
  color: #9c9c9c;
`;

const AbBody = styled.p`
  display: flex;
  justify-content: center
  font-size: 16px;
  width: 100%;
  text-align: center;
  line-height: 2
`;

export default AboutDPL;
