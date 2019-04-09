import React from 'react'
import { Header, Form, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

class Footer extends React.Component {
  
  render () {
    return (
      <>
      <AppContainer>

      <div class="ui vertical footer segment" >
        <div class="ui center aligned container">
          <div class="ui stackable divided grid">
          <div Icon class="two wide column" style={{ textAlign: "left", paddingTop: '4em', }}>
            <Icon name= "hand paper outline" size="small" />
          <p> All rights reserved. @2019 FP Studio</p>
            </div>
            <ColumnStyle class="three wide column" style={{ textAlign: "center" }}>
              <h4 class="ui header"> First Column </h4>
             <div class="ui link list">
             <br/>
              <a ref="Link one" class="item"> Link one</a>
              <a ref="Link one" class="item"> Link two</a>
              <a ref="Link one" class="item"> Link three</a>
              <a ref="Link one" class="item"> Link four</a>
              </div>
            </ColumnStyle>
            <ColumnStyle class="three wide column" style={{ textAlign: "center" }} >
              <h4 class="ui header"> Second Column </h4>
             <div class="ui link list">
             <br/>
              <a ref="Link one" class="item"> Link one</a>
              <a ref="Link one" class="item"> Link two</a>
              <a ref="Link one" class="item"> Link three</a>
              <a ref="Link one" class="item"> Link four</a>
              </div>
            </ColumnStyle>
            <ColumnStyle class="three wide column" style={{ textAlign: "center" }}>
              <h4 class="ui header"> Third Column </h4>
             <div class="ui link list">
             <br/>
              <a ref="Link one" class="item"> Link one</a>
              <a ref="Link one" class="item"> Link two</a>
              <a ref="Link one" class="item"> Link three</a>
              <a ref="Link one" class="item"> Link four</a>
              </div>
            </ColumnStyle>
            <ColumnStyle class="three wide column">
              <h4 class="ui header"> Subcribe </h4>
                <Form>
                  <Form.Input 
                    placeholder="Email"/>
                </Form>
            </ColumnStyle>
          </div>
        </div>
      </div>
      </AppContainer>
      </>
    )
  }
}

const AppContainer = styled.div`
  display: flex;
  align-items: flex-end;
  bottom: 0;
  
  width: 100%;
  justify-content: center;
  
  @media (max-width: 380px) {
    margin-top: 4000px;
    
   }
`

const ColumnStyle = styled.div`
  bottom: 0;
  margin-right: 6em;
  margin-top: 5em;
  margin-bottom: 6em;
`

export default Footer