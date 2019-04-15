import React from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'
import Footer from '../MAIN/Footer'
// import { AuthConsumer } from '../../providers/AuthProvider'

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
        this.props.history.push("/")
      })
      .catch(err => {
        alert(err)
      })
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  render () {
    const { abBody1, abBody2, abBody3} = this.state
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            placeholder='Content1'
            name='abBody1'
            required
            value={abBody1}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder='Content2'
            name='abBody2'
            value={abBody2}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder='Content3'
            name='abBody3'
            value={abBody3}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
        <Footer />
      </>
    )
  }
}

// const ConnectedAboutForm = (props) => (
//   <AuthConsumer>
//     { auth => (
//       <AboutForm
//         { ...props }
//         auth={auth}
//       />
//     )}
//   </AuthConsumer>
// )

export default AboutForm