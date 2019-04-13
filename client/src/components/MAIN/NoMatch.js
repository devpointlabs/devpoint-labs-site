import React from "react";
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";
import Footer from "./Footer";

const NoMatch = () => (
  <>
    <Header as="h3" textAlign="center">
      Page not found return
      <Link to="/"> Home</Link>
    </Header>
    <Footer />
  </>
);

export default NoMatch;
