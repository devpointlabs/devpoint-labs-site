import React from "react";
import { Header, Container } from "semantic-ui-react";
import styled from "styled-components";
import axios from 'axios'
import { Link } from 'react-router-dom'

class AboutDPL extends React.Component {
  state = { about: {}, }

  componentDidMount() {
    // const { match: { params: {id }},} = this.props
    axios.get(`/api/abouts/`)
      .then(res => {
        this.setState({ about: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  render() {
    const { id, abBody1, abBody2, abBody3 } = this.state.about

    return (
      <>
        <Container style={{ width: "55%" }}>
          <AbText>ABOUT</AbText>
          <DevHead as="h1">DevPoint Labs</DevHead>
          <br />
          <AbBody>
            {abBody1}
          </AbBody>
          <br />
          <br />
          <AbBody>
            <Link to={`/About/${id}/edit`}>
              {abBody2}
            </Link>
          </AbBody>
          <AbBody>
            {abBody3}
          </AbBody>
          <br />
          <br />
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
