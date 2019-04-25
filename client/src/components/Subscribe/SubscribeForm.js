import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";

export default class SubscribeForm extends Component {
  defaultValues = { email: "" };

  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    const subscriber = this.state;
    axios.post("/api/subscribers", subscriber).then(res => {
      alert("You are subscribed");
    });
    this.setState({ ...this.defaultValues });
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
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
          style={{ opacity: '.9'}}
        />
        <Form.Button inverted style={{ color: `${colors.blue}`, fontFamily: `'Exo 2', sans-serif`}} onClick={this.handleSubmit}>Subscribe</Form.Button>
      </Form>
    );
  }
}

const colors = {
  black: `#141414`,
  darkGrey: `#2d2d2d`,
  grey: `#757575`,
  darkPurp: `#53407A`,
  purp: `#6E54A3`,
  white: `#FFFFFF`,
  lightPurp: "#e4dced",
  blue: `#B2DBF1`
};