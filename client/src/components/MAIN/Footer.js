import React from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import SubscribeForm from "../Subscribe/SubscribeForm";
import icon from "../../assets/icons/Beaker-white.png";

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <AppContainer>
          <div class="ui vertical footer segment">
            <div class="ui center aligned container">
              <div class="ui stackable divided grid">
                <div>
                  <br />
                  <br />
                  <br />
                  <br />
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
                </div>
                <ColumnStyle1
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle class="ui header"> First Column </HeadStyle>
                  <div class="ui link list">
                    <br />
                    <a ref="Link one" style={{ color: 'white'}} class="item">
                      {" "}
                      Link one
                    </a>
                    <a ref="Link one" style={{ color: 'white'}} class="item">
                      {" "}
                      Link two
                    </a>
                    <a ref="Link one" style={{ color: 'white'}} class="item">
                      {" "}
                      Link three
                    </a>
                    <a ref="Link one" style={{ color: 'white'}} class="item">
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
                    <a ref="Link one" style={{ color: 'white'}} class="item">
                      {" "}
                      Link one
                    </a>
                    <a ref="Link one" style={{ color: 'white'}} class="item">
                      {" "}
                      Link two
                    </a>
                    <a ref="Link one" style={{ color: 'white'}} class="item">
                      {" "}
                      Link three
                    </a>
                    <a ref="Link one" style={{ color: 'white'}} class="item">
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
                    <a ref="Link one" style={{ color: 'white'}} class="item">
                      {" "}
                      Link one
                    </a>
                    <a ref="Link one" style={{ color: 'white'}} class="item">
                      {" "}
                      Link two
                    </a>
                    <a ref="Link one" style={{ color: 'white'}} class="item">
                      {" "}
                      Link three
                    </a>
                    <a ref="Link one" style={{ color: 'white'}} class="item">
                      {" "}
                      Link four
                    </a>
                  </div>
                </ColumnStyle3>
                <ColumnStyle4
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle style={{ color: 'white'}} class="ui header"> Fourth Column </HeadStyle>
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
  lightPurp: '#e4dced',
}

const HeadStyle = styled.h4`
  color: white
  font-size: 12pt
`

const AppContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to left, ${colors.lightPurp}, ${colors.purp}, ${colors.purp}, ${colors.darkPurp}) !important

  @media (max-width: 1024px) {
    margin-top: 1950px;
  }
  @media (max-width: 770px) {
    margin-top: 2000px;
  }
  @media (max-width: 430px) {
    margin-top: 3250px;
  }
  @media (max-width: 380px) {
    margin-top: 3500px;
  }
  @media (max-width: 325px) {
    margin-top: 3600px;
  }
`;

const ColumnStyle1 = styled.div`
  margin-left: 3em;
  margin-right: 7em;
  margin-top: 5em;
  margin-bottom: 6em;

  @media (max-width: 1024px) {
    margin-right: 3.5em;
    margin-left: 0.5em;
    margin-bottom: 1em;
  }

  @media (max-width: 770px) {
    margin-right: 1em;
    margin-left: 0em;
    margin-bottom: 1em;
  }

  @media (max-width: 430px) {
    margin-top: 0.5em;
    margin-right: 0em;
    margin-left: 0em;
    margin-bottom: 1em;
  }

  @media (max-width: 380px) {
    margin-top: 1em;
    margin-right: 0em;
    margin-left: 6.85em;
    margin-bottom: 1em;
  }

  @media (max-width: 325px) {
    margin-top: 1em;
    margin-right: 0em;
    margin-left: 5.25em;
    margin-bottom: 1em;
  }
`;
const ColumnStyle2 = styled.div`
  margin-left: 1em;
  margin-right: 7em;
  margin-top: 5em;
  margin-bottom: 6em;

  @media (max-width: 1024px) {
    margin-right: 3.5em;
    margin-left: 2em;
    margin-bottom: 1em;
  }

  @media (max-width: 770px) {
    margin-right: 1em;
    margin-left: 0em;
    margin-bottom: 1em;
  }

  @media (max-width: 430px) {
    margin-top: 0.5em;
    margin-right: 0em;
    margin-left: 0em;
    margin-bottom: 1em;
  }

  @media (max-width: 380px) {
    margin-top: 1em;
    margin-right: 0em;
    margin-left: 6.5em;
    margin-bottom: 1em;
  }

  @media (max-width: 320px) {
    margin-top: 0.5em;
    margin-right: 0em;
    margin-left: 5em;
    margin-bottom: 1em;
  }
`;

const ColumnStyle3 = styled.div`
  margin-left:
  margin-right: 5em;
  margin-top: 5em;
  margin-bottom: 6em;
  
  @media (max-width: 1024px) {
   margin-right: 3.5em;
   margin-left: 2em;
   margin-bottom: 1em;    
  }

  @media (max-width: 770px) {
    margin-right: 1em;
    margin-left: 0em;
    margin-bottom: 1em;    
  }
  
  @media (max-width: 430px) {
    margin-top: .5em;
    margin-right: 0em;
    margin-left: 0em;
    margin-bottom: 1em;    
  }
  
  @media (max-width: 380px) {
    margin-top: 1em;
    margin-right: 0em;
    margin-left: 6.85em;
    margin-bottom: 1em;    
  }
  
  @media (max-width: 320px) {
    margin-top: 1em;
    margin-right: 0em;
    margin-left: 5.25em;
    margin-bottom: 1em;
    
  }
  
  `;

const ColumnStyle4 = styled.div`
  margin-left: 7em;
  margin-top: 5em;
  margin-bottom: 6em;

  @media (max-width: 1024px) {
    margin-right: 1em;
    margin-left: 1em;
    margin-bottom: 1em;
  }

  @media (max-width: 770px) {
    margin-right: 0em;
    margin-left: 1em;
    margin-bottom: 1em;
  }

  @media (max-width: 430px) {
    margin-top: 0.5em;
    margin-right: 0em;
    margin-left: 6em;
    margin-bottom: 1em;
  }

  @media (max-width: 380px) {
    margin-top: 1em;
    margin-right: 0em;
    margin-left: 4em;
    margin-bottom: 1em;
  }

  @media (max-width: 320px) {
    margin-top: 1em;
    margin-right: 0em;
    margin-left: 2.25em;
    margin-bottom: 1em;
  }
`;

export default Footer;
