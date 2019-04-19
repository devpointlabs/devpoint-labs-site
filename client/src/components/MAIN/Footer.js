import React from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import SubscribeForm from "../Subscribe/SubscribeForm";
import { media } from "../../theme/media";
import icon from "../../assets/icons/Beaker-white.png";
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <AppContainer>
          <div class="ui vertical footer segment">
            <div class="ui center aligned container">
              <div class="ui stackable divided grid">
                <LogoCon>
                  <Image src={icon} width="60px" />
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "200",
                      color: "white"
                    }}
                  >
                    {" "}
                    All rights reserved.
                    <br /> ©2019 DevPoint Labs
                  </p>
                </LogoCon>
                <ColumnStyle1
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle class="ui header"> Courses </HeadStyle>
                  <div class="ui link list">
                  
                    <Link to='./FullTimeUtah' style={{ color: "white" }} class="item">
                      {" "}
                      Full Time Utah
                    </Link>
                    <Link to='./PartTimeUtah' style={{ color: "white" }} class="item">
                      {" "}
                      Part Time Utah
                    </Link>
                    <Link to='./PartTimeLV' style={{ color: "white" }} class="item">
                      {" "}
                      Part Time Las Vegas
                    </Link>
                  
                  </div>
                </ColumnStyle1>
                <ColumnStyle2
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle class="ui header"> About </HeadStyle>
                  <div class="ui link list">
                    <Link to='./ApplicationsForm' style={{ color: "white" }} class="item">
                      {" "}
                      Apply Now
                    </Link>
                    <Link to='./DPLScholarships' style={{ color: "white" }} class="item">
                      {" "}
                      Scholarships
                    </Link>
                    <Link to='./ContactUs' style={{ color: "white" }} class="item">
                      {" "}
                      Contact Us
                    </Link>

                  </div>
                </ColumnStyle2>
                <ColumnStyle3
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle class="ui header"> Community </HeadStyle>
                  <div class="ui link list">
                    <a href="https://www.meetup.com/devpoint-labs/" style={{ color: "white" }} class="item">
                      {" "}
                      Events
                    </a>
                    <a href="https://devpointlabs.tumblr.com/" style={{ color: "white" }} class="item">
                      {" "}
                      Blog
                    </a>
                    <a href="https://devpointlabs.bigcartel.com/" style={{ color: "white" }} class="item">
                      {" "}
                      Shop
                    </a>
                  </div>
                </ColumnStyle3>
                <ColumnStyle4
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle style={{ color: "white" }} class="ui header">
                    {" "}
                    {" "}
                  </HeadStyle>
                  <SubscribeForm />
                </ColumnStyle4>
              </div>
            </div>
          </div>
        </AppContainer>
      </footer>
    );
  }
}

const colors = {
  black: `#141414`,
  darkGrey: `#2d2d2d`,
  grey: `#757575`,
  darkPurp: `#53407A`,
  purp: `#6E54A3`,
  white: `#FFFFFF`,
  lightPurp: "#e4dced",
  blue: "#6befd9"
};

const HeadStyle = styled.h4`
  color: white
  font-size: 12pt
`;

const LogoCon = styled.div`
  padding-top: 70px;
  ${media.phone`
    margin-top: 30px
    margin-left: 50px
    margin-bottom: 30px
  `}
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center
  align-items: center
  width: 100%;
  background-image: linear-gradient(
    to left,
    ${colors.purp},
    ${colors.darkPurp}
  ) !important;
`;

const ColumnStyle1 = styled.div`
  margin-left: 3em;
  margin-right: 5em;
  margin-top: 5em;
  margin-bottom: 6em;
  ${media.desktop`
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 5em;
  margin-bottom: 6em;
  `}
  ${media.tablet`
  margin-left: 0
  margin-right: 0
  `}
  ${media.phone`
  display: none
  `}
`;
const ColumnStyle2 = styled.div`
  margin-left: 1em;
  margin-right: 5em;
  margin-top: 5em;
  margin-bottom: 6em;
  ${media.desktop`
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 5em;
  margin-bottom: 6em;
  `}
  ${media.tablet`
  margin-left: 0
  margin-right: 0
  `}
  ${media.phone`
    display: none
  `}
`;

const ColumnStyle3 = styled.div`
  margin-left:
  margin-right: 5em;
  margin-top: 5em;
  margin-bottom: 6em;
  ${media.desktop`
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 5em;
  margin-bottom: 6em;
  `}
  ${media.tablet`
  display: none
  `}
  ${media.phone`
  display: none
  `}
  `;

const ColumnStyle4 = styled.div`
  margin-left: 5em;
  margin-top: 5em;
  margin-bottom: 6em;
  ${media.desktop`
  margin-left: 2em;
  margin-right: 0
  margin-top: 5em;
  margin-bottom: 6em;
  `}
  ${media.tablet`
  margin-left: 0
  margin-right: 0
  `}
  ${media.phone`
    margin-left: 2em
    margin-top: 0
  `}
`;

export default Footer;
