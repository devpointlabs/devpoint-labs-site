import React from "react";
import { Link } from "react-router-dom";
import { Header, Button, Container } from "semantic-ui-react";
import styled from "styled-components";
import { media } from "../../theme/media";
import Footer from "../MAIN/Footer";

const AppSubmitPage = () => (
  <>
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HeroHead>Thank you</HeroHead>
      <AppHeader>
        for contacting us,
        <br />
        <em>
          <DesText>You will hear back from us within 24 hours</DesText>
        </em>
      </AppHeader>
      <ButtonStyle>
        <ButtLink href="/">Home</ButtLink>
      </ButtonStyle>
    </Container>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Footer />
  </>
);

const ButtonStyle = styled.div`
  width: 15%;
  text-align: center;
  border-radius: 3%
  padding: 10px;
  background-color: #53407a;
  font-weight: 400;
  position: relative;
  left: 44%
  box-shadow: 0.2em 0.2em 0.4em #141414;
  &:hover {
    background-color: white;
  }
  ${media.phone`
    width: 100px;
    left: 34%
  `}
`;

const ButtLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    text-decoration: none;
    color: #53407a;
  }
  ${media.tablet`
    font-size: 1em
  `} ${media.phone`
    font-size: 1em;
  `};
`;

const HeroHead = styled.h1`
  font-size: 140px;
  text-align: center;
  font-weight: 600;
  ${media.phone`
    font-size: 38px
  `}
`;

const DesText = styled.p`
  font-size: 28px;
  text-align: center;
`;

const AppHeader = styled.p`
  font-size: 28px;
  text-align: center;
`;

export default AppSubmitPage;
