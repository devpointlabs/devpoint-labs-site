import React from "react";
import { Image, Container, Card, Grid, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  return (
    <>
      <Grid columns={2}>
        <Grid.Column>
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

              <Card.Meta style={styles.metaFont}>
                Las Vegas, Nevada
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
              <Link to="/PartTimeLV" style={styles.cardLink}>
                Action Link
              </Link>
            </Card>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
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
            <Link to="/FullTimeUtah" style={{ textAlign: "center", fontWeight: "bold" }}>
              Action Link
            </Link>
          </Card>
        </Grid.Column>
      </Grid>
    </>
  );
};

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
