import React from "react";
import axios from "axios";
import { media } from "../../theme/media";
import styled from "styled-components";
import Footer from "../MAIN/Footer";
import { Form, Header, Container, } from "semantic-ui-react";

class AppNotesForm extends React.Component {
  state = { applications: { 
    first_name: "",
    last_name: "",
    email:"",
    phone_number:"",
    current_city:"",
    comments:"",
    comments1:"",
    comments2:"",
    notes: "",
  } }

  componentDidMount() {
    const { match: { params: { id } } } = this.props
    if (id)
    axios.get(`/api/applications/${id}`)
        .then(res => {
            this.setState({ 
              first_name: res.data.first_name, 
              last_name: res.data.last_name,
              email: res.data.email,
              phone_number: res.data.phone_number,
              current_city: res.data.current_city,
              comments: res.data.comments,
              comments1: res.data.comments1,
              comments2: res.data.comments2,
              notes: res.data.notes
            })
        })
        .catch(err => {
            console.log(err.response)
        })
}   

    handleSubmit = e => {
        e.preventDefault()
        const application = { ...this.state}
        const { match: { params: {id } }, history: { push } } = this.props
        if (id) {
            axios.put(`/api/applications/${id}`, application)
                .then( res => push(`/applications/${id}`))
        } else {
            axios.post(`/api/applications`, application)
            .then (res => push(`/api/applictions/${res.data.id}`))
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
      current_city,
      comments,
      comments1,
      comments2,
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
              label="Why Are You Applying To DevPoint Labs?"
              name="comments"
              value={comments}
              onChange={this.handleChange}
            />
            <Form.Input
              label="What Is Your Education background?"
              name="comments1"
              value={comments1}
              onChange={this.handleChange}
            />
            <Form.Input
              label="What Hobbies Do You Have And What Are You Passionate About In Life?"
              name="comments2"
              value={comments2}
              onChange={this.handleChange}
            />
            <Form.Input
              label="notes"
              name="notes"
              placeholder="notes"
              value={notes}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <em>
              <h3>Please Choose An Option From the Dropdowns</h3>
            </em>


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
export default AppNotesForm;