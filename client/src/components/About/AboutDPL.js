import React from "react";
import { Header, Container } from "semantic-ui-react";
import styled from "styled-components";

const AboutDPL = () => (
  <>
    <Container style={{ width: "55%" }}>
      <AbText>ABOUT</AbText>
      <DevHead as="h1">DevPoint Labs</DevHead>
      <br />
      <AbBody>
        We are a coding bootcamp that started in the summer of 2013. We offer a
        full-time and part-time web development course including a part-time UX
        Design class. Our accelerated learning model provides an immersive
        experience for those looking to learn programming, pivot careers, and
        become apart of a vibrant developer community.
      </AbBody>
      <br />
      <br />
      <AbBody>Mission:</AbBody>
      <AbBody>
        Students always come first, period. It's our mission to deliver a world
        class experience while teaching the latest technologies. We strive to
        improve the quality of life for our students and a better future for our
        community.
      </AbBody>
      <br />
      <br />
    </Container>
  </>
);

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
