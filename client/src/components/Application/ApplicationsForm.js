import React from "react";
import axios from "axios";
import { media } from "../../theme/media";
import styled from "styled-components";
import Footer from "../MAIN/Footer";
import wallpaper from "../../assets/images/qbkls.png";
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
    course: "",
    locations: "",
    grad: "",
    experience: "",
    gender: "",
    social: ""
  };
  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    const application = this.state;
    axios
      .post("/api/applications", application)
      .then(res => {
        this.props.history.push("/AppSubmitPage");
      })
      .catch(err => {
        alert("Please Fill Out All Fields Before Submitting");
      });
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
        text:
          "U of U Professional Education Web Development (May 6th - July 23rd, 2019)",
        value:
          "U of U Professional Education Web Development (May 6th - July 23rd, 2019)"
      },
      {
        key: "2",
        text:
          "U of U Professional Education Web Devlopment (Aug. 12th - Oct. 25th, 2019)",
        value:
          "U of U Professional Education Web Devlopment (Aug. 12th - Oct. 25th, 2019)"
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

    const options1 = [
      {
        key: "1",
        text: "Salt Lake City, UT",
        value: "Salt Lake City, UT"
      },
      {
        key: "2",
        text: "Las Vegas, NV",
        value: "Las Vegas, NV"
      }
    ];

    const options2 = [
      {
        key: "1",
        text: "Become A Developer",
        value: "Become A Developer"
      },
      {
        key: "2",
        text: "Work at an awesome startup",
        value: "Work at an awesome startup"
      },
      {
        key: "3",
        text: "Not sure",
        value: "Not sure"
      }
    ];

    const options3 = [
      {
        key: "1",
        text: "No coding experience, just basic computer skills",
        value: "No coding experience, just basic computer skills"
      },
      {
        key: "2",
        text: "Some coding experience. Familiar  with HTML and CSS",
        value: "Some coding experience. Familiar  with HTML and CSS"
      },
      {
        key: "3",
        text:
          "Moderate coding experiece. I know how to launch a Rails app, but I still have a lot to learn",
        value:
          "Moderate coding experiece. I know how to launch a Rails app, but I still have a lot to learn"
      },
      {
        key: "4",
        text:
          "Intermerdiate experience. I have built a few apps form start to finish",
        value:
          "Intermerdiate experience. I have built a few apps form start to finish"
      }
    ];

    const options4 = [
      {
        key: "1",
        text: "Male",
        value: "Male"
      },
      {
        key: "2",
        text: "Female",
        value: "Female"
      },
      {
        key: "3",
        text: "Other",
        value: "Other"
      },
      {
        key: "4",
        text: "Prefer Not To Answer",
        value: "Prefer Not To Answer"
      }
    ];

    const options5 = [
      {
        key: "1",
        text: "Facebook",
        value: "Facebook"
      },
      {
        key: "2",
        text: "Twitter",
        value: "Twitter"
      },
      {
        key: "3",
        text: "Bing/Yahoo",
        value: "Bing/Yahoo"
      },
      {
        key: "4",
        text: "Ruby User Report",
        value: "Ruby User Report"
      },
      {
        key: "5",
        text: "Course Report",
        value: "Course Report"
      },
      {
        key: "6",
        text: "Other",
        value: "Other"
      }
    ];
    return (
      <>
        <div style={{ background: `url(${wallpaper})`, positon: "ab" }}>
          <FormStyle>
            <div
              style={{
                textAlign: "center",
                fontSize: "2em",
                fontWeight: "100",
                lineHeight: "1.5"
              }}
            >
              {" "}
              DevPoint Labs - Full Application{" "}
            </div>
            <br />
            <h4 style={{ textAlign: "justify" }}>
              {" "}
              Thanks for your Interest in DevPoint Labs! Please fill out the
              entirety of the application.
            </h4>
            <br />
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
                selection
                options={options}
                onChange={this.handleChange}
                value={course}
                name="course"
              />
              <br />
              <Dropdown
                placeholder="Which Location Are You Interested In?"
                fluid
                selection
                options={options1}
                onChange={this.handleChange}
                value={location}
                name="location"
              />
              <br />
              <Dropdown
                placeholder="What Do You Want To Do After Graduating Our Course?"
                fluid
                selection
                options={options2}
                onChange={this.handleChange}
                value={grad}
                name="grad"
              />
              <br />
              <Dropdown
                placeholder="What Is Your Coding Background?"
                fluid
                selection
                options={options3}
                onChange={this.handleChange}
                value={experience}
                name="experience"
              />
              <br />
              <Dropdown
                placeholder="What Is Your Gender?"
                fluid
                selection
                options={options4}
                onChange={this.handleChange}
                value={gender}
                name="gender"
              />
              <br />
              <Dropdown
                placeholder="How Did You Hear About Us?"
                fluid
                selection
                options={options5}
                onChange={this.handleChange}
                value={social}
                name="social"
              />
              <br />
              <ButtonStyle>
                <ButtLink onClick={this.handleSubmit} href="/AppSubmitPage">
                  Submit
                </ButtLink>
              </ButtonStyle>
            </Form>
          </FormStyle>
        </div>
        <Footer />
      </>
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
export default ApplicationsForm;
