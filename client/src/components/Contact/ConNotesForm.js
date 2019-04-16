import React from "react";
import axios from "axios";
import { media } from "../../theme/media";
import styled from "styled-components";
import Footer from "../MAIN/Footer";
import { Link } from 'react-router-dom'
import { Form, Header, Dropdown, Container, Select } from "semantic-ui-react";

class ConNotesForm extends React.Component {
  state = { contacts: { 
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    comments: ""
  } }

  componentDidMount() {
    const { match: { params: { id } } } = this.props
    if (id)
    axios.get(`/api/contacts/${id}`)
        .then(res => {
            this.setState({ 
              firstname: res.data.firstname, 
              lastname: res.data.lastname,
              email: res.data.email,
              phone: res.data.phone,
              comments: res.data.comments,
            })
        })
        .catch(err => {
            console.log(err.response)
        })
}   

    handleSubmit = e => {
        e.preventDefault()
        const contact = { ...this.state}
        const { match: { params: {id } }, history: { push } } = this.props
        if (id) {
            axios.put(`/api/contacts/${id}`, contact)
                .then( res => push(`/contacts`))
        } else {
            axios.post(`/api/contacts`, contact)
            .then (res => push(`/api/contacts/${res.data.id}`))
        }
      }   

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }
  

  render() {
    const {
      firstname,
      lastname,
      email,
      phone,
      comments
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
                DevPoint Labs -Edit Contact {" "}
              </div>
            </em>
            <br />
          </Header>
          <Form
            style={{ position: "relative", marginBottom: "5em" }}
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
              name="last_name"
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
            <br />
            <br />
            <em>
              <h3>Comments</h3>
            </em>
            <Form.Input
              name="comments"
              value={comments}
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
export default ConNotesForm;