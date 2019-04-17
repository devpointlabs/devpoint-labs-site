import React from "react";
import { Grid, Button, Container } from "semantic-ui-react";

const CampusTour = () => (
  <div
    style={{
      backgroundImage: `linear-gradient(to left, ${colors.purp}, ${
        colors.darkPurp
      })`
    }}
  >
    <Container>
      <Grid style={styles.grid} stackable>
        <Grid.Column width={5}>
          <h4 style={{ color: `${colors.white}` }}>
            Want to come by for a campus tour?{" "}
          </h4>
        </Grid.Column>
        <Grid.Column width={9}>
          <p style={{ color: `${colors.white}` }} allowFontScaling={false}>
            If you call Utah home or are visiting Salt Lake City, schedule a
            campus tour with one of our admissions directors to meet the staff,
            current students and classroom.
          </p>
        </Grid.Column>
        <Grid.Column width={2} verticalAlign="middle">
          <Button inverted color="white" href="/ContactUs">
            Schedule
          </Button>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

const colors = {
  black: `#141414`,
  darkGrey: `#2d2d2d`,
  grey: `#757575`,
  darkPurp: `#53407A`,
  purp: `#6E54A3`,
  white: `#FFFFFF`,
  lightPurp: "#e4dced"
};

const styles = {
  grid: {
    paddingTop: "5em",
    paddingBottom: "5em",
    paddingLeft: "10%",
    paddingRight: "10%"
  }
};

export default CampusTour;
