import React from 'react';
import { Header, Form, Icon, Container, } from 'semantic-ui-react';
import styled from 'styled-components';

class Footer extends React.Component {
  
  render () {
    return (
      <>
      <AppContainer>

      <div class="ui vertical footer segment" >
        <div class="ui center aligned containter">
          <div class="ui stackable divided grid">
          <div Icon class="two wide column" style={{ textAlign: "center" }}>
            <Icon name= "hand paper outline" size="small" />
          <p> All rights reserved. @2019 FP Studio</p>
            </div>
            <div class="three wide column" style={{ textAlign: "center" }}>
              <h4 class="ui header"> First Column </h4>
             <div class="ui link list">
              <a ref="Link one" class="item"> Link one</a>
              <a ref="Link one" class="item"> Link two</a>
              <a ref="Link one" class="item"> Link three</a>
              <a ref="Link one" class="item"> Link four</a>
              </div>
            </div>
            <div class="three wide column" style={{ textAlign: "center" }} >
              <h4 class="ui header"> Second Column </h4>
             <div class="ui link list">
              <a ref="Link one" class="item"> Link one</a>
              <a ref="Link one" class="item"> Link two</a>
              <a ref="Link one" class="item"> Link three</a>
              <a ref="Link one" class="item"> Link four</a>
              </div>
            </div>
            <div class="three wide column" style={{ textAlign: "center" }}>
              <h4 class="ui header"> Third Column </h4>
             <div class="ui link list">
              <a ref="Link one" class="item"> Link one</a>
              <a ref="Link one" class="item"> Link two</a>
              <a ref="Link one" class="item"> Link three</a>
              <a ref="Link one" class="item"> Link four</a>
              </div>
            </div>
            <div class="three wide column">
              <h4 class="ui header"> Subcribe </h4>
                <Form>
                  <Form.Input 
                    placeholder="Email"/>
                </Form>
            </div>
          </div>
        </div>
      </div>
      </AppContainer>
      </>
    )
  }
}

const AppContainer = styled.div`
position: absolute;
bottom: 0;
width: 100%;
padding-bottom: 20px;
`

export default Footer;