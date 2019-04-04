import React from 'react';
import axios from 'axios';
import media from '../theme/media';
import styled from 'styled-components'
import { Form, Header, Dropdown, Container } from "semantic-ui-react";

class ApplicationsForm extends React.Component {
  defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    current_city: "",
    comments: "",
    comments1: "",
    comments2: "",
    course:"",
    locations:"",
    grad:"",
    experience:"",
    gender:"",
    social:""
  };
  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    const application = this.state;
    axios.post("/api/applications", application).then(res => {
      console.log()
      this.props.history.push("/");
    });
    this.setState({ ...this.state });
  }

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
      comments,
      comments1,
      comments2, 
      course,
      location,
      grad,
      experience,
      gender,
      social
    } = this.state;

    const options = [
      {
        key: "1",
        text: "U of U Professional Education Web Development (May 6th - July 23rd, 2019)",
        value: "course",
      },
      {
        key: "2",
        text: "U of U Professional Education Web Devlopment (Aug. 12th - Oct. 25th, 2019)",
        value: "course",
      },
      {
        key: "3",
        text: "Part-Time Web Development (May 6th - July 23rd, 2019)",
        value: "course",
      },
      {
        key: "4",
        text: "Part-Time Web Development (Aug. 12th - Oct. 25th, 2019)",
        value: "course",
      }
    ]

    const options1 = [
      {
        key: "1",
        text: "Salt Lake City, UT",
        value: "location",
      },
      {
        key: "2",
        text: "Las Vegas, NV",
        value: "location",
      },
    ]

    const options2 = [
      {
        key: "1",
        text: "Become A Developer",
        value: "grad",
      },
      {
        key: "2",
        text: "Work at an awesome startup",
        value: "grad",
      },
      {
        key: "3",
        text: "Not sure",
        value: "grad",
      },
    ]

    const options3 = [
      {
        key: "1",
        text: "No coding experience, just basic computer skills",
        value: "experience",
      },
      {
        key: "2",
        text: "Some coding experience. Familiar  with HTML and CSS",
        value: "experience",
      },
      {
        key: "3",
        text: "Moderate coding experiece. I know how to launch a Rails app, but I still have a lot to learn",
        value: "experience",
      },
      {
        key: "4",
        text: "Intermerdiate experience. I have built a few apps form start to finish",
        value: "experience",
      }
    ]

    const options4 = [
      {
        key: "1",
        text: "Male",
        value: "gender",
      },
      {
        key: "2",
        text: "Female",
        value: "gender",
      },
      {
        key: "3",
        text: "Other",
        value: "gender",
      },
      {
        key: "4",
        text: "Prefer Not To Answer",
        value: "gender",
      }
    ]

    const options5 = [
      {
        key: "1",
        text: "Facebook",
        value: "social",
      },
      {
        key: "2",
        text: "Twitter",
        value: "social",
      },
      {
        key: "3",
        text: "Bing/Yahoo",
        value: "social",
      },
      {
        key: "4",
        text: "Ruby User Report",
        value: "social",
      },
      {
        key: "5",
        text: "Course Report",
        value: "social",
      },
      {
        key: "6",
        text: "Other",
        value: "social",
      }
    ]
    return (
      <FormStyle>
        <Header>
          <em>
            <div style={{textAlign:'center', fontSize: "2em", fontWeight: "100"}}> DevPoint Labs - Full Application </div>
          </em>
          <br />
          <em>
          <h4 style={{textAlign:'center'}}> Thanks for your Interest in DevPoint Labs! Please fill out the entirety of the application.</h4>
          </em>
        </Header>
        <Form 
          style={{ position: "relative", marginBottom: "5em" }}
          onSubmit={this.handleSubmit}>
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
            <br />
            <br />
            <em>
            <h3>Essay Questions</h3>
            </em>
            <Form.Input
                placeholder="Why Are You Applying To DevPoint Labs?"
                name="comments"
                value={comments}
                onChange={this.handleChange}
                />
              <Form.Input
                placeholder="What Is Your Education background?"
                name="comments1"
                value={comments1}
                onChange={this.handleChange}
                />
              <Form.Input
                placeholder="What Hobbies Do You Have And What Are You Passionate About In Life?"
                name="comments2"
                value={comments2}
                onChange={this.handleChange}
                />
              <br />
              <br />
              <em>
              <h3>Please Choose An Option From the Dropdowns</h3>
              </em>
              <Dropdown
                placeholder="Which Course Are You Interested In?"
                fluid
                value={course}
                selection
                options={options}
                required
                />
              <br />
              <Dropdown
                placeholder="Which Location Are You Interested In?"
                fluid
                value={location}
                selection
                options={options1}
                required
                />
              <br />
              <Dropdown
                placeholder="What Do You Want To Do After Graduating Our Course?"
                fluid
                value={grad}
                selection
                options={options2}
                required
                />
              <br />
              <Dropdown
                placeholder="What Is Your Coding Background?"
                fluid
                value={experience}
                selection
                options={options3}
                required
                />
              <br />
              <Dropdown
                placeholder="What Is Your Gender?"
                fluid
                value={gender}
                selection
                options={options4}
                required
                />
              <br />
              <Dropdown
                placeholder="How Did You Hear About Us?"
                fluid
                value={social}
                selection
                options={options5}
                required
                />
              <br />
          <Form.Button color="purple">Submit</Form.Button>
        </Form>
      </FormStyle>
    );
  }
}


const FormStyle = styled(Container)`
margin: 5em
  ${media.tablet`
    padding-left: 10px !important
    padding-right:80px !important
    padding-top: 15px !important
  `}
  ${media.phone`
    padding-left: 40px !important
    padding-right: 10px !important
    padding-top: 15px !important
  `}
`
export default ApplicationsForm;
