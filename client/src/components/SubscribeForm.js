import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";

export default class SubscribeForm extends Component {
  defaultValues = { email: "" };

  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    const subscribe = this.state;
    axios.post("/api/subscribes", subscribe).then(res => {
      console.log();
      this.props.history.push("/");
    });
    this.setState({ ...this.state });
  };

  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };

  render() {
    const { email } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
          required
        />
        <Form.Button onClick={this.handleSubmit}>Subscribe</Form.Button>
      </Form>
    );
  }
}
