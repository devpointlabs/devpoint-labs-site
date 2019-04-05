import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import { Button } from 'react-bootstrap';

const ScholarshipAbout = () => (
  <div>
    <Grid style={{ padding: '8%', background: 'gainsboro' }}>
      <Grid.Row>
        <Grid.Column>
          <Header textAlign='center' style={styles.header}>About</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Header as='h2'>The Scholarship</Header>
        <p>
          We're excited to offer two scholarships for our Full-Time
          ProEd Web Development and Part-Time Web Development classes.
          We will be awarding 50% off tuition for a Women in Tech and
          also a Diversity in Tech Scholarship. We're looking for individuals
          who demonstrate grit, have a passion for learning, and empathy.
          Previous coding experience is not required, however they're expected
          to complete all prep work before day one of class.
      </p>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column style={styles.column}>
          <Header as='h2'>Women in Tech Scholarship</Header>
          <p>
            From the mid 1800's to 1945 women played a significant role in
            conceptualizing and developing the computer programming field.
            Grace Hopper, who served in the Navy, had a breakthrough and
            built COBOL, the first programming language to use words rather
            than numbers. It wasn't until the 1980's that women majoring in
            Computer Science started to decline. We would like to change that.
            This scholarship is in place to promote more women in computer programming.
        </p>
        </Grid.Column>
        <Grid.Column style={styles.column}>
          <Header as='h2'>Opportunity in Tech Scholarship</Header>
          <p>
            We believe it's important to support all groups in pursuing a career
            in tech. With diversity in the workplace we can truly empathize,
            create, and solve problems for the people we are building products
            for. We define diversity as all the ways in which we differ. These
            dimensions include, but are limited to: age, gender, race, sexual
            orientation, religion, income, mental/physical abilities, ethnic
            heritage, education, or military experience.
        </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Segment basic style={{ padding: '8%' }} textAlign='center'>
      <Header style={styles.header}>Award Information</Header>
      <h4>Awarded: 50% Off Tuition</h4>
      <h4>Deadlines:</h4>
      <br />
      <p>
        Summer 2019 - Mar. 31th <Button color='purple'>Apply</Button>
      </p>
      <p>
        Fall 2019 - July. 6th <Button color='purple'>Apply</Button>
      </p>
    </Segment>
  </div>
)

const styles = {
  header: { 
    fontSize: '2.5em ', 
    fontStyle: 'italic', 
    fontWeight: 100 
  },
  column: { 
    paddingLeft: '10%', 
    paddingTop: '3%'
  }
}

export default ScholarshipAbout