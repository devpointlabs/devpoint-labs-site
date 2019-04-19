import React from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";

class CourseForm extends React.Component {
  defaultValues = {
    image_url: "",
    season: "",
    description: "",
    start_date: "",
    schedule: "",
    cost: "",
    location: "",
  }
  state = { ...this.defaultValues }

  componentDidMount() {
    const { match: { params: { id } } } = this.props
    if (id)
    axios.get(`/api/cohorts/${id}`)
        .then(res => {
            this.setState({
              season: res.data.season,
              description: res.data.description,
              start_date: res.data.start_date,
              schedule: res.data.schedule,
              cost: res.data.cost,
              location: res.data.location,
            })
        })
        .catch(err => {
            console.log(err.response)
        })
}  
  
  
  handleSubmit = e => {
    e.preventDefault();
    const cohort = this.state
    const { match: { params: {id } }, history: { push } } = this.props
    if (id) {
    axios.put(`/api/cohorts/${id}`, cohort)
      .then( res => push(`/EditCourses/${id}`))
    } else {
      axios.post(`/api/cohorts`, cohort)
        .then (res => push(`/EditCourses`))
    }
  }

  handleChange = e => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value });
  };

  render() {
    const {
      season,
      description,
      start_date,
      schedule,
      cost,
      location
      } = this.state
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Season"
              placeholder="Season"
              name="season"
              required
              onChange={this.handleChange}
              value={season}
            />
            <Form.Input
              label="Description"
              placeholder="Description"
              name="description"
              required
              onChange={this.handleChange}
              value={description}
            />
            <Form.Input
              label="Start_date"
              placeholder="Start_date"
              name="start_date"
              required
              onChange={this.handleChange}
              value={start_date}
            />
            <Form.Input
              label="Schedule"
              placeholder="Schedule"
              name="schedule"
              required
              onChange={this.handleChange}
              value={schedule}
            />
            <Form.Input
              label="Cost"
              placeholder="Cost"
              name="cost"
              required
              onChange={this.handleChange}
              value={cost}
            />
            <Form.Input
              label="Location"
              placeholder="Location"
              name="location"
              required
              onChange={this.handleChange}
              value={location}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    )
  }
}

export default CourseForm;