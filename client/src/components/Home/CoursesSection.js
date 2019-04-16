import React from "react";
import { Card, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const CoursesSection = () => {
  return (
    <div style={{backgroundImage: `linear-gradient(to right, ${colors.black}, ${colors.darkPurp}, ${colors.black})`}}>
      <Container>
        <Grid columns={2}>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Grid.Row>
                <Card style={styles.cardSize}>
                  <Card.Header style={styles.headerFont}>
                    Part-Time Web Development
                  </Card.Header>

                  <Card.Meta style={styles.metaFont}>
                    Salt Lake City, Utah
                  </Card.Meta>
                  <br />
                  <Card.Description style={styles.descFont}>
                    Page Layout is where these
                    <br />
                    components come together,
                    <br />
                    while wireframing
                  </Card.Description>
                  <br />
                  <Link to="./PartTimeUtah" style={styles.cardLink}>
                    Action Link
                  </Link>
                </Card>
              </Grid.Row>
              <br />
              <Grid.Row>
                <Card style={styles.cardSize}>
                  <Card.Header style={styles.headerFont}>
                    Part-Time Web Development
                  </Card.Header>

                  <Card.Meta style={styles.metaFont}>Las Vegas, Nevada</Card.Meta>
                  <br />
                  <Card.Description style={styles.descFont}>
                    Page Layout is where these
                    <br />
                    components come together,
                    <br />
                    while wireframing
                  </Card.Description>
                  <br />
                  <Link to="/PartTimeLV" style={styles.cardLink}>
                    Action Link
                  </Link>
                </Card>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Card style={styles.rCardSize}>
                <Card.Header style={styles.headerFont} textAlign="center">
                  University of Utah Full-Time Web Development
                </Card.Header>

                <Card.Meta style={styles.metaFont} textAlign="center">
                  Salt Lake City, Utah
                </Card.Meta>
                <br />
                <Card.Description style={styles.descFont} textAlign="center">
                  It ensures that they are kept up to date on any
                  <br />
                  developments and changes amde to the struture or
                  <br />
                  visuals. Visual guides also allow you to define
                </Card.Description>
                <br />
                <Link
                  to="/FullTimeUtah"
                  style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                  Action Link
                </Link>
              </Card>
            </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

const colors = {
  black: `#141414`,
  darkGrey: `#2d2d2d`,
  grey: `#757575`,
  darkPurp: `#53407A`,
  purp: `#6E54A3`,
  white: `#FFFFFF`
}

const styles = {
  rCardSize: {
    width: "100%",
    height: "29.3em",
    paddingTop: "15em"
  },

  cardSize: {
    padding: "2em",
    width: "100%",
    height: "14em"
  },

  headerFont: {
    fontSize: "1.2em"
  },

  metaFont: {
    fontSize: ".7em"
  },

  descFont: {
    fontSize: ".9em"
  },

  cardLink: {
    fontWeight: "bold"
  }
};

export default CoursesSection;
