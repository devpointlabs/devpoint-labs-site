import React from "react";
import { Form, Header, Checkbox } from "semantic-ui-react";

class ApplicationsForm extends React.Component {
  defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    current_city: ""
  };
  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    const product = { ...this.state };
    // TODO: make api POST request
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
      first_name,
      last_name,
      email,
      phone_number,
      current_city,
      part
    } = this.state;

    return (
      <div>
        <Header as="h1">New Product</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="First Name"
              name="first_name"
              placeholder="Name"
              value={first_name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Last Name"
              name="last_name"
              placeholder="Name"
              value={last_name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Phone Number"
              name="phone_number"
              placeholder="Phone Number"
              value={phone_number}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Current City"
              name="current_city"
              placeholder="Current City"
              type="current_city"
              value={current_city}
              onChange={this.handleChange}
            />
            <Form.Field>
              <Checkbox
                label="Is this a full or basic application?"
                name="part"
                value={part}
              />
            </Form.Field>
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default ApplicationsForm;
