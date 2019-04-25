import React from "react";
import { Grid, Image, } from "semantic-ui-react";
import Adidas from "../../assets/images/adidas.png";
import Puma from "../../assets/images/puma.png";
import Nike from "../../assets/images/nike.png";
import Fila from "../../assets/images/fila.png";
import Ritter from "../../assets/images/ritter.png";
import styled from "styled-components";
import { media, } from "../../theme/media";

const HomeLogos = () => (
  <>
    <LogoGrid relaxed='very' container centered columns={5} class="ui equal width grid">
      <Grid.Row>
        <Grid.Column width={2}>
          <Image src={Fila} alt="fila" size="tiny" />
        </Grid.Column>
        <Grid.Column width={2}>
          <Image src={Nike} alt="nike" size="tiny" />
        </Grid.Column>
        <Grid.Column width={2}>
          <Image src={Adidas} alt="adidas" size="tiny" />
        </Grid.Column>
        <Grid.Column width={2}>
          <Image src={Ritter} alt="ritter" size="tiny" />
        </Grid.Column>
        <Grid.Column width={2}>
          <Image src={Puma} alt="puma" size="tiny" />
        </Grid.Column>
      </Grid.Row>
    </LogoGrid>
  </>
);

const LogoGrid = styled(Grid)`
  width: 100%;
  opacity: .3 !important
  padding-bottom: 7em !important
  ${media.tablet`
    visibility: hidden
  `}
`;

export default HomeLogos;
