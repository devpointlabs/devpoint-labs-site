import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { media } from "../theme/media"
import { Header, Container, Grid, Button, Card, Image } from "semantic-ui-react"
import axios from 'axios'
import CourseForm from './CourseForm'

class EditCourses extends React.Component {
  state = { cohorts: [], }


  componentDidMount() {
    axios.get(`/api/cohorts`)
      .then(res => {
        this.setState({ cohorts: res.data })
      })
  }

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm, };
    })
  }

  handleDelete = (id) => {
    axios.delete(`/api/cohorts/${id}`)
      .then(res => {
        const { cohorts } = this.state
        this.setState({ cohorts: cohorts.filter(t => t.id !== id) })
      })
  }

  render() {
    const { cohorts } = this.state

    return (
      <>
        <CostContainer>
          <Link to="/Cohorts">
            <Button inverted color='blue'>Add Course</Button>
          </Link>
        <Header centered>SLC Fulltime</Header>
        <Grid stackable columns={3}>
          <Grid.Row>
            {cohorts.sort((a, b) => a.id - b.id).slice(0, 3).map(cohort => {
              return (
                <Grid.Column item={cohorts} key={cohort.id}>
                  <CostCard style={styles.costBox} >
                    <Image src={cohort.image_url} />
                    <br />

                    <CardHeader>{cohort.season}</CardHeader>
                    <CostDes>
                      {cohort.description}
                    </CostDes>
                    <ul>
                      <CostPoint>
                        {cohort.start_date}
                      </CostPoint>
                      <CostPoint>{cohort.schedule}</CostPoint>
                      <CostPoint>{cohort.cost}</CostPoint>
                      <CostPoint>{cohort.location}</CostPoint>
                    </ul>
                    <br />
                    <Link to="/ApplicationsForm">
                      <CardButton inverted color='blue'>Apply Now</CardButton>
                    </Link>
                    <br />
                    <h5 style={{ width: '100%' }}>Or</h5>
                    <br />
                    <Link
                      to="/"
                      style={{
                        display: 'flex !important',
                        justifyContent: 'center !important',
                        marginBottom: '2em',
                        fontSize: "20px",
                        fontStyle: "bold",
                      }}
                    >
                      <CardButton inverted color='orange'>Learn More</CardButton>
                    </Link>
                  </CostCard>
                  <Button >
                    <Link to={`/Cohorts/${cohort.id}/edit`} as={Button}>Edit</Link></Button>
                  <Button onClick={() => this.handleDelete(cohort.id)} color='black'>
                  </Button>
                </Grid.Column>
              )
            })
            }
          </Grid.Row>
        </Grid>
        <Header centered>SLC Part-time</Header>
        <Grid stackable columns={3}>
          <Grid.Row>
            {cohorts.sort((a, b) => a.id - b.id).slice(3, 6).map(cohort => {
              return (
                <Grid.Column item={cohorts} key={cohort.id}>
                  <CostCard style={styles.costBox} >
                    <Image src={cohort.image_url} />
                    <br />

                    <CardHeader>{cohort.season}</CardHeader>
                    <CostDes>
                      {cohort.description}
                    </CostDes>
                    <ul>
                      <CostPoint>
                        {cohort.start_date}
                      </CostPoint>
                      <CostPoint>{cohort.schedule}</CostPoint>
                      <CostPoint>{cohort.cost}</CostPoint>
                      <CostPoint>{cohort.location}</CostPoint>
                    </ul>
                    <br />
                    <Link to="/ApplicationsForm">
                      <CardButton inverted color='blue'>Apply Now</CardButton>
                    </Link>
                    <br />
                    <h5 style={{ width: '100%' }}>Or</h5>
                    <br />
                    <Link
                      to="/"
                      style={{
                        display: 'flex !important',
                        justifyContent: 'center !important',
                        marginBottom: '2em',
                        fontSize: "20px",
                        fontStyle: "bold",
                      }}
                    >
                      <CardButton inverted color='orange'>Learn More</CardButton>
                    </Link>
                  </CostCard>
                  <Button >
                    <Link to={`/Cohorts/${cohort.id}/edit`} as={Button}>Edit</Link></Button>
                  {/* <Button onClick={() => this.handleDelete(cohort.id)} color='black'>
                      </Button> */}
                </Grid.Column>
              )
            })
            }
          </Grid.Row>
        </Grid>
        <Header centered>UNLV Part-time</Header>
        <Grid stackable columns={3}>
          <Grid.Row>
            {cohorts.sort((a, b) => a.id - b.id).slice(6, 9).map(cohort => {
              return (
                <Grid.Column item={cohorts} key={cohort.id}>
                  <CostCard style={styles.costBox} >
                    <Image src={cohort.image_url} />
                    <br />

                    <CardHeader>{cohort.season}</CardHeader>
                    <CostDes>
                      {cohort.description}
                    </CostDes>
                    <ul>
                      <CostPoint>
                        {cohort.start_date}
                      </CostPoint>
                      <CostPoint>{cohort.schedule}</CostPoint>
                      <CostPoint>{cohort.cost}</CostPoint>
                      <CostPoint>{cohort.location}</CostPoint>
                    </ul>
                    <br />
                    <Link to="/ApplicationsForm">
                      <CardButton inverted color='blue'>Apply Now</CardButton>
                    </Link>
                    <br />
                    <h5 style={{ width: '100%' }}>Or</h5>
                    <br />
                    <Link
                      to="/"
                      style={{
                        display: 'flex !important',
                        justifyContent: 'center !important',
                        marginBottom: '2em',
                        fontSize: "20px",
                        fontStyle: "bold",
                      }}
                    >
                      <CardButton inverted color='orange'>Learn More</CardButton>
                    </Link>
                  </CostCard>
                  <Button >
                    <Link to={`/Cohorts/${cohort.id}/edit`} as={Button}>Edit</Link></Button>
                  {/* <Button onClick={() => this.handleDelete(cohort.id)} color='black'>
                      </Button> */}
                </Grid.Column>
              )
            })
            }
          </Grid.Row>
        </Grid>
        <Header centered>All Courses</Header>
        <Grid stackable columns={3}>
          <Grid.Row>
            {cohorts.sort((a, b) => a.id - b.id).map(cohort => {
              return (
                <Grid.Column item={cohorts} key={cohort.id}>
                  <CostCard style={styles.costBox} >
                    <Image src={cohort.image_url} />
                    <br />

                    <CardHeader>{cohort.season}</CardHeader>
                    <CostDes>
                      {cohort.description}
                    </CostDes>
                    <ul>
                      <CostPoint>
                        {cohort.start_date}
                      </CostPoint>
                      <CostPoint>{cohort.schedule}</CostPoint>
                      <CostPoint>{cohort.cost}</CostPoint>
                      <CostPoint>{cohort.location}</CostPoint>
                    </ul>
                    <br />
                    <Link to="/ApplicationsForm">
                      <CardButton inverted color='blue'>Apply Now</CardButton>
                    </Link>
                    <br />
                    <h5 style={{ width: '100%' }}>Or</h5>
                    <br />
                    <Link
                      to="/"
                      style={{
                        display: 'flex !important',
                        justifyContent: 'center !important',
                        marginBottom: '2em',
                        fontSize: "20px",
                        fontStyle: "bold",
                      }}
                    >
                      <CardButton inverted color='orange'>Learn More</CardButton>
                    </Link>
                  </CostCard>
                  <Button >
                    <Link to={`/Cohorts/${cohort.id}/edit`} as={Button}>Edit</Link></Button>
                  {/* <Button onClick={() => this.handleDelete(cohort.id)} color='black'>
                      </Button> */}
                </Grid.Column>
              )
            })
            }
          </Grid.Row>
        </Grid>
      </CostContainer>
      </>
    )
  }
}

const styles = {
  costBox: {
    width: "500px",
    padding: 0
  }
};

const CostPoint = styled.p`
  font-size: 14px;
  text-align: left;
`;

const CostDes = styled.text`
  font-size: 18px;
  text-align: left;
  padding: 20px;
`;

const CostCard = styled(Card)`
  height: auto;
`;

const TextContainer = styled(Container)``;

const BlockText = styled.div`
  margin-left: 7em
  width: 80%
  text-align: left
  font-size: 18px
  ${media.phone`
    margin-left: 0
    width: 100%
  `}
`;
const CostContainer = styled(Container)`
  text-align: center ${media.phone`
    width: 450px
    margin-left: 0px
  `};
`;
const CardHeader = styled.h1`
  font-size: 24px
  font-weight: bold
  text-align: left
  margin-left: 5%
`;
const CardDescription = styled.p`
  font-size: 18px ${media.phone`
    text-align: left
 `};
`;
const CardButton = styled(Button)`
  
  ${media.phone`
    width: 7.5em
  `};
`;

export default EditCourses;