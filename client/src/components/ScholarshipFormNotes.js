import React from "react";
import axios from "axios";
import { media } from "../theme/media";
import styled from "styled-components";
import Footer from "./Footer";
import { Link } from 'react-router-dom'
import { Form, Header, Dropdown, Container, Select } from "semantic-ui-react";

class ScholarshipFormNotes extends React.Component {
  state = { scholarships: { 
    first_name: "",
    last_name: "",
    email:"",
    phone_number:"",
    notes: "",
  } }

  componentDidMount() {
    const { match: { params: { id } } } = this.props
    if (id)
    axios.get(`/api/scholarships/${id}`)
        .then(res => {
            this.setState({ 
              first_name: res.data.first_name, 
              last_name: res.data.last_name,
              email: res.data.email,
              phone_number: res.data.phone_number,
              notes: res.data.notes
            })
        })
        .catch(err => {
            console.log(err.response)
        })
}   

    handleSubmit = e => {
        e.preventDefault()
        const scholarship = { ...this.state}
        const { match: { params: {id } }, history: { push } } = this.props
        if (id) {
            axios.put(`/api/scholarships/${id}`, scholarship)
                .then( res => push(`/scholarships/${id}`))
        } else {
            axios.post(`/api/schoalrships`, scholarship)
            .then (res => push(`/api/scholarships/${res.data.id}`))
        }
      }   

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }
  

  render() {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      notes
    } = this.state;

    
    return (
      <>
        <FormStyle>
          <Header>
            <em>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "2em",
                  fontWeight: "100"
                }}
              >
                {" "}
                DevPoint Labs - Full Application{" "}
              </div>
            </em>
            <br />
            <em>
              <h4 style={{ textAlign: "center" }}>
                {" "}
                Thanks for your Interest in DevPoint Labs! Please fill out the
                entirety of the application.
              </h4>
            </em>
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
            <br />
            <br />
            <Form.Input
              label="notes"
              name="notes"
              placeholder="notes"
              value={notes}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Form.Button color="purple">Submit</Form.Button>
          </Form>
        </FormStyle>
        <Footer />
      </>
    );
  }
}

const FormStyle = styled(Container)`
  margin: 5em ${media.tablet`
    padding-left: 10px !important
    padding-right:80px !important
    padding-top: 15px !important
  `} ${media.phone`
    padding-left: 40px !important
    padding-right: 10px !important
    padding-top: 15px !important
  `};
`;
export default ScholarshipFormNotes;