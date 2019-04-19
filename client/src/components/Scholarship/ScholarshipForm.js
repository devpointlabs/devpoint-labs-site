import React from "react";
import axios from "axios";
import { media } from "../../theme/media";
import styled from "styled-components";
import { Form, Header, Dropdown, Container } from "semantic-ui-react";
import wallpaper from '../../assets/images/qbkls.png'
import Footer from '../MAIN/Footer'

class ScholarshipForm extends React.Component {
  defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    current_city: "",
    course: "",
    comments: "",
    comments1: "",
    comments2: "",
    comments3: ""
  };
  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    const scholarship = this.state;
    axios.post("/api/scholarships", scholarship)
      .then(res => {
        this.props.history.push("/AppSubmitPage");
      })
      .catch(err => {
        alert('Please Fill Out All Fields Before Submitting')
      })
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      course,
      comments,
      comments1,
      comments2,
      comments3
    } = this.state;

    const options = [
      {
        key: "1",
        text:
          "U of U Professional Education Web Development (May 6th - July 23rd, 2019)",
        value: "U of U Professional Education Web Development (May 6th - July 23rd, 2019)"
      },
      {
        key: "2",
        text:
          "U of U Professional Education Web Devlopment (Aug. 12th - Oct. 25th, 2019)",
        value: "U of U Professional Education Web Devlopment (Aug. 12th - Oct. 25th, 2019)"
      },
      {
        key: "3",
        text: "Part-Time Web Development (May 6th - July 23rd, 2019)",
        value: "Part-Time Web Development (May 6th - July 23rd, 2019)"
      },
      {
        key: "4",
        text: "Part-Time Web Development (Aug. 12th - Oct. 25th, 2019)",
        value: "Part-Time Web Development (Aug. 12th - Oct. 25th, 2019)"
      }
    ];
    return (
      <div style={{ padding: '1px', background: `url(${wallpaper})` }}>
        <FormStyle>
          <Header>
            <div
              style={{
                textAlign: "center",
                fontSize: "2em",
                fontWeight: "100",
                lineHeight: "1.5"
              }}
            >
              {" "}
              DevPoint Labs - Scholarship Essay Questions{" "}
            </div>
            <br />
            <h4 style={{ textAlign: "justify" }}>
              {" "}
              Thanks for your Interest in DevPoint Labs Scholarship! Fill in the
              form below and answer the essay questions. Please limit responses
              to 300 words.
            </h4>
          </Header>
          <Form
            style={{ position: "relative", marginBottom: "5em" }}
            onSubmit={this.handleSubmit}
          >
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
            <Dropdown
              placeholder="Which course are you interested in?"
              fluid
              selection
              options={options}
              onChange={this.handleChange}
              value={course}
              name="course"
            />
            <br />
            <br />
            <em>
              <h3>Essay Questions</h3>
            </em>
            <Form.Input
              placeholder="Tell us about your background"
              name="comments"
              value={comments}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Why do you want to be a developer?"
              name="comments1"
              value={comments1}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="What skills do you currently have? (Photoshop, HTML, etc..)"
              name="comments2"
              value={comments2}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="What would you want to do with the skills you gain at Devpoint Labs?"
              name="comments3"
              value={comments3}
              onChange={this.handleChange}
            />
            <ButtonStyle>
              <ButtLink onClick={this.handleSubmit} href="/AppSubmitPage">
                Submit
              </ButtLink>
            </ButtonStyle>
          </Form>
        </FormStyle>
        <br />
        <Footer />
      </div>
    );
  }
}

const ButtonStyle = styled.div`
  border-radius: 3%
  padding: 10px;
  background-color: #53407a;
  position: absolute;
  text-align: center;
  `;

const ButtLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2em;
  font-weight: 400;
  &:hover {
    text-decoration: none;
    color: #141414;
  }
  ${media.tablet`
    font-size: 1em
  `} 
`;

const FormStyle = styled(Container)`
  margin: 5em ${media.tablet`
    padding-left: 50px !important
    padding-right:50px !important
    padding-top: 15px !important
  `} ${media.phone`
    padding-left: 10px !important
    padding-right: 10px !important
    padding-top: 15px !important
  `};
`;

export default ScholarshipForm;
