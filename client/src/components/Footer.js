import React from "react";
import { Header, Form, Icon } from "semantic-ui-react";
import styled from "styled-components";
import SubscribeForm from "./SubscribeForm";

class Footer extends React.Component {
  render() {
    return (
      <>
        <AppContainer>
          <div class="ui vertical footer segment">
            <div class="ui center aligned container">
              <div class="ui stackable divided grid">
                <div
                  Icon
                  class="two wide column"
                  style={{ textAlign: "left", paddingTop: "4em" }}
                >
                  <Icon name="hand paper outline" size="small" />
                  <p> All rights reserved. @2019 FP Studio</p>
                </div>
                <ColumnStyle1
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <h4 class="ui header"> First Column </h4>
                  <div class="ui link list">
                    <br />
                    <a ref="Link one" class="item">
                      {" "}
                      Link one
                    </a>
                    <a ref="Link one" class="item">
                      {" "}
                      Link two
                    </a>
                    <a ref="Link one" class="item">
                      {" "}
                      Link three
                    </a>
                    <a ref="Link one" class="item">
                      {" "}
                      Link four
                    </a>
                  </div>
                </ColumnStyle1>
                <ColumnStyle2
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <h4 class="ui header"> Second Column </h4>
                  <div class="ui link list">
                    <br />
                    <a ref="Link one" class="item">
                      {" "}
                      Link one
                    </a>
                    <a ref="Link one" class="item">
                      {" "}
                      Link two
                    </a>
                    <a ref="Link one" class="item">
                      {" "}
                      Link three
                    </a>
                    <a ref="Link one" class="item">
                      {" "}
                      Link four
                    </a>
                  </div>
                </ColumnStyle2>
                <ColumnStyle3
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <h4 class="ui header"> Third Column </h4>
                  <div class="ui link list">
                    <br />
                    <a ref="Link one" class="item">
                      {" "}
                      Link one
                    </a>
                    <a ref="Link one" class="item">
                      {" "}
                      Link two
                    </a>
                    <a ref="Link one" class="item">
                      {" "}
                      Link three
                    </a>
                    <a ref="Link one" class="item">
                      {" "}
                      Link four
                    </a>
                  </div>
                </ColumnStyle3>
                <ColumnStyle4
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <h4 class="ui header"> Fourth Column </h4>
                  <SubscribeForm />
                </ColumnStyle4>
              </div>
            </div>
          </div>
        </AppContainer>
      </>
    );
  }
}

const AppContainer = styled.div`
  display: flex;
  align-items: flex-end;
 
  
  width: 100%;
  justify-content: center;

  @media (max-width: 380px) {
    margin-top: 4000px;    
   }
`

const ColumnStyle1 = styled.div`
  margin-left: 3em;
  margin-right: 7em;
  margin-top: 5em;
  margin-bottom: 6em;

  @media (max-width: 1024px) {
   margin-right: 3.5em;
   margin-left: .5em;
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
  
  @media (max-width: 325px) {
    margin-top: 1em;
    margin-right: 0em;
    margin-left: 5.25em;
    margin-bottom: 1em;
    
  }
  
  `
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
    margin-top: .5em;
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
    margin-top: .5em;
    margin-right: 0em;
    margin-left: 5em;
    margin-bottom: 1em;
    
  }
  
  `
  
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
  
  `
  
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
    margin-top: .5em;
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
  
  `
  
  export default Footer
