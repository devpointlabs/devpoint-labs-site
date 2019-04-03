import React from "react";
import { Header, Form, Dropdown } from 'semantic-ui-react'



class ContactForm extends React.Component {
  
    defaultValues = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      comments: "",
    }
    state = { ...this.defaultValues };

    handleSubmit = e => {
      e.preventDefault();
      const formApp = { ...this.state };
      this.setState({ ...this.defaultValues });
    };
    
    handleChange = e => {
      const {
        target: { name, value }
      } = e;
      this.setState({ [name]: value });
    };
    render() {
      const {
        firstname,
        lastname,
        email,
        phone,
        comments,
        course,
        location
      } = this.state
      const options = [
        { key: 'UoU Full-Time', text: "U of U Professional Education Web Development(May 6th - July 23rd, 2019)", value: 'course' },
        { key: 'UoU Full-Time', text: 'University of Utah Full-Time Course', value: 'course' },
        { key: 'UNLV Part-Time', text: 'University of Nevada, Las Vegas Part-Time Course', value: 'course' }
      ]
      const locOpts = [
        { key: 'Las Vegas, Nevada', text: "Las Vegas, Nevada", value: 'location' },
        { key: 'Salt Lake City, Utah', text: 'Salt Lake City, Utah', value: 'location' },
      ]
    return (
  <div>
  <br />
    <Header as="h1" textAlign="center"> DevPoint Labs - Basic Application </Header>
    <Header as="h3">
      Thanks for your interest in DevPoint Labs! Filling out this application
      helps us learn a little bit about you and what course
      <br />
      you're interested in. We'll get in touch with you to answer any questions
      you might have!
    </Header>
    <Form  style={{ position: "relative", marginBottom: "15em" }} onSubmit={this.handleSubmit}>
      <Form.Input
        label="First Name"
        name="firstname"
        placeholder="First Name"
        value={firstname}
        onChange={this.handleChange}
        required
      />
      <Form.Input
        label="Last Name"
        name="lastname"
        placeholder="Last Name"
        value={lastname}
        onChange={this.handleChange}
        required
      />
      <Form.Input
        label="Email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={this.handleChange}
        required
      />
      <Form.Input
        label="Phone Number"
        name="phone"
        placeholder="Phone Number"
        value={phone}
        onChange={this.handleChange}
        required
      />
      <Dropdown
        placeholder="Which course are you interested in?"
        fluid
        selection
        options={options}
      />
      <br />
      <Dropdown 
        placeholder="What location are you looking at?"
        fluid
        selection
        options={locOpts}
      />

    </Form>
  </div>
    )
  }
};

export default ContactForm;
