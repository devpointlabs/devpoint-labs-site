import React from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import SubscribeForm from "../Subscribe/SubscribeForm";
import { media } from "../../theme/media";
import icon from "../../assets/icons/Beaker-white.png";

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
                    <br /> ©2019 FP Studio
                  </p>
                </LogoCon>
                <ColumnStyle1
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle class="ui header"> First Column </HeadStyle>
                  <div class="ui link list">
                    <br />
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link one
                    </a>
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link two
                    </a>
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link three
                    </a>
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link four
                    </a>
                  </div>
                </ColumnStyle1>
                <ColumnStyle2
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle class="ui header"> Second Column </HeadStyle>
                  <div class="ui link list">
                    <br />
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link one
                    </a>
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link two
                    </a>
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link three
                    </a>
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link four
                    </a>
                  </div>
                </ColumnStyle2>
                <ColumnStyle3
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle class="ui header"> Third Column </HeadStyle>
                  <div class="ui link list">
                    <br />
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link one
                    </a>
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link two
                    </a>
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link three
                    </a>
                    <a ref="Link one" style={{ color: "white" }} class="item">
                      {" "}
                      Link four
                    </a>
                  </div>
                </ColumnStyle3>
                <ColumnStyle4
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle style={{ color: "white" }} class="ui header">
                    {" "}
                    Fourth Column{" "}
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
  lightPurp: "#e4dced"
};

const HeadStyle = styled.h4`
  color: white
  font-size: 12pt
`;

const LogoCon = styled.div`
  padding-top: 90px;
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
  margin-right: 7em;
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
  margin-right: 7em;
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
  margin-left: 7em;
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
