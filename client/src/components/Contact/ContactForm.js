import React from "react";
import axios from "axios";
import styled from "styled-components";
import Footer from "../../components/MAIN/Footer";
import { media } from "../../theme/media";
import { Header, Form, Dropdown, Container, Button } from "semantic-ui-react";
import wallpaper from '../../assets/images/qbkls.png'

class ContactForm extends React.Component {
  defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    comments: ""
  };
  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    const contact = this.state;
    axios.post("/api/contacts", contact).then(res => {
      this.props.history.push("/ContactSubmitPage");
    });
    // this.setState({ ...this.state });
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
    } = this.state;
    const options = [
      {
        key: "1",
        text:
          "U of U Professional Education Web Development(May 6th - July 23rd, 2019)",
        value: "course"
      },
      {
        key: "2",
        text: "University of Utah Full-Time Course",
        value: "course"
      },
      {
        key: "3",
        text: "University of Nevada, Las Vegas Part-Time Course",
        value: "course"
      }
    ];
    const locOpts = [
      {
        key: "1",
        text: "Las Vegas, Nevada",
        value: "location"
      },
      {
        key: "2",
        text: "Salt Lake City, Utah",
        value: "location"
      }
    ];
    return (
      <div style={{ padding: '1px', background: `url(${wallpaper})` }}>
        <FormStyle>
          <div
            style={{
              textAlign: "center",
              fontSize: "2em",
              fontWeight: "100",
              lineHeight: "1.5"
            }}
          >
            DevPoint Labs - Basic Application{" "}
          </div>
          <br />
          <h4 style={{ textAlign: "justify" }}>
            Thanks for your interest in DevPoint Labs! Filling out this
            application helps us learn a little bit about you and what course
            you're interested in. We'll get in touch with you to answer any
            questions you might have!
          </h4>
          <br />
          <Form
            style={{ position: "relative", marginBottom: "15em" }}
            onSubmit={this.handleSubmit}
          >
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
              value={course}
              selection
              options={options}
            />
            <br />
            <Dropdown
              placeholder="What location are you looking at?"
              fluid
              value={location}
              selection
              options={locOpts}
            />
            <Form.Input
              label="Questions?"
              name="comments"
              placeholder="What would you like to know..."
              value={comments}
              onChange={this.handleChange}
            />
            <ButtonStyle>
              <ButtLink onClick={this.handleSubmit} href="/AppSubmitPage">
                Submit
              </ButtLink>
            </ButtonStyle>
          </Form>
        </FormStyle>
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

export default ContactForm;
