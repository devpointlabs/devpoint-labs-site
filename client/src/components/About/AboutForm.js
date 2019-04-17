import React from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'

class AboutForm extends React.Component {
  defaultValues = {
    abBody1: "",
    abBody2: "",
    abBody3: "",
  };
  
  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    const about = this.state;
    axios.post("/api/abouts", about)
      .then(res => {
        this.props.history.push("/About")
      })
      .catch(err => {
        alert(err)
      })
      this.setState({ ...this.state })
  };

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
    }

  render () {
    const { abBody1, abBody2, abBody3} = this.state
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <textarea
            placeholder='Content1'
            name='abBody1'
            required
            value={abBody1}
            onChange={this.handleChange}
            rows='5'
          />
          <br />
          <br />
          <textarea
            placeholder='Content2'
            name='abBody2'
            value={abBody2}
            onChange={this.handleChange}
            rows='5'
          />
          <br />
          <br />
          <textarea
            placeholder='Content3'
            name='abBody3'
            value={abBody3}
            onChange={this.handleChange}
            rows='5'
          />
          <br />
          <br />
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    )
  }
}

export default AboutForm