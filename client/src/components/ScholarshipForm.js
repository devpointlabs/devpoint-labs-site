import React from 'react';
import { Form, Header, Checkbox } from "semantic-ui-react";

class ShcolarshipForm extends React.Component {
  defaultValues = { first_name: "", last_name: "", email: "", phone_number: "", current_city: "" };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const product = { ...this.state, };
    // TODO: make api POST request
    this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { first_name, last_name, email, phone_number, current_city, why, background, hobbies } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
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
              required
            />

            <Form.Input
              label="Phone Number"
              name="phone_number"
              placeholder="Phone Number"
              value={phone_number}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Current City"
              name="current_city"
              placeholder="Current City"
              type="current_city"
              value={current_city}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Why Are You Applying to DevPoint Labs"
              name="why"
              type=""
              value={why}
              required
              />
            <Form.Input 
              label="What Is Your Education Background?"
              name="background"
              type=""
              value={background}
              required
              />
            <Form.Input 
              label="What Hobbies Do You Have And What Are You Passionate About In Life?"
              name="background"
              type=""
              value={hobbies}
              required
              />
            <Form.Field label="What Course Are You Interested in?" control='select'>
              <option value=''></option>
              <option value='q1'>U of U Professional Education Web Development (May 6th - July 23rd, 2019)</option>
              <option value='q1'>U of U Professional Education Web Devlopment (Aug. 12th - Oct. 25th, 2019)</option>
              <option value='q1'>Part-Time Web Development (May 6th - July 23rd, 2019)</option>
              <option value='q1'>Part-Time Web Development (Aug. 12th - Oct. 25th, 2019)</option>
            </Form.Field>
            <br />
            <Form.Field label="What Location Are You Interested In?" control='select'>
              <option value=''></option>
              <option value='q1'>Salt Lake City, UT</option>
              <option value='q1'>Las Vegas, NV</option>
            </Form.Field>
            <br />
            <Form.Field label="What Do You Want To Do After Graduating Our Course?" control='select'>
              <option value=''></option>
              <option value='q1'>Become a developer</option>
              <option value='q2'>Work at an awesome startup</option>
              <option value='q3'>I am not sure</option>
            </Form.Field>
            <br />
            <Form.Field label="What Is Your Coding BackGround?" control='select'>
              <option value=''></option>
              <option value='q1'>No coding experience, just basic computer skills</option>
              <option value='q2'>Some code experience. Familiar with HTML and CSS</option>
              <option value='q3'>Moderate coding experience. I know how to launch a Rails app, but I still have a lot to learn</option>
              <option value='q4'>Intermerdiate experience. I have built a few apps from start to finish</option>
            </Form.Field>
            <br />
            <Form.Field label="What Is Your Gender?" control='select'>
              <option value=''></option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
              <option value='Prefer Not To Answer'>Prefer Not To Answer</option>
            </Form.Field>
            <br />
            <Form.Field label="How Did You Hear About Us?" control='select'>
              <option value=''></option>
              <option value='Twitter'>Twitter</option>
              <option value='Toogle'>Google</option>
              <option value='Bing/Yahoo'>Bing/Yahoo</option>
              <option value='Ruby User Group'>Ruby User Group</option>
              <option value='Course Report'>Course Report</option>
              <option value='Other'>Other</option>
            </Form.Field>
          <Form.Button color="purple">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ShcolarshipForm;