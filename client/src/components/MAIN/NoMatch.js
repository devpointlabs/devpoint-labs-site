import React from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";
import Footer from "./Footer";

const NoMatch = () => (
  <>
    <Header style={{ fontSize: '10em' }} textAlign="center">
      <em>
        404
        <h3 style={{ textAlign: 'center' }}>
          Oh dear, we seem to have gone amiss!
          <br />
          <br />
          Let's get back on track...
        </h3>
      </em>
      <Button floated='centered' color='inverted grey'>
        <Link to="/"> Take me Home </Link>
      </Button>
    </Header>
    <Footer />
  </>
);

export default NoMatch;
