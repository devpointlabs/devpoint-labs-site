import React from 'react'
import axios from 'axios'
import Footer from '../MAIN/Footer'
import { Form } from 'semantic-ui-react'

class AboutEditForm extends React.Component {
  defaultValues = {
    abBody1: "",
    abBody2: "",
    abBody3: "",
  };

  state = { ...this.defaultValues };

  componentDidMount() {
    const { match: { params: { id } } } = this.props
    if (id)
    axios.get(`/api/abouts/${id}`)
        .then(res => {
            this.setState({ 
              abBody1: res.data.abBody1, 
              abBody2: res.data.abBody2,
              abBody3: res.data.abBody3,
            })
        })
        .catch(err => {
            console.log(err.response)
        })
}   

handleSubmit = e => {
  e.preventDefault()
  const about = this.state
  const { match: { params: {id } }, history: { push } } = this.props
  if (id) {
      axios.put(`/api/abouts/${id}`, about)
          .then( res => push('/About'))
  } else {
      axios.post(`/api/abouts`, about)
      .then (res => push('/About'))
  }
}   

handleChange = (e) => {
const { target: { name, value } } = e
this.setState({ [name]: value })
}

  render () {
    const { abBody1, abBody2, abBody3} = this.state

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <textarea
            placeholder='Content1'
            name='abBody1'
            required
            value={abBody1}
            onChange={this.handleChange}
            rows='5'
          />
          <br />
          <br />
          <textarea
            placeholder='Content2'
            name='abBody2'
            value={abBody2}
            onChange={this.handleChange}
            rows='5'
          />
          <br />
          <br />
          <textarea
            placeholder='Content3'
            name='abBody3'
            value={abBody3}
            onChange={this.handleChange}
            rows='5'
          />
          <br />
          <br />
          <Form.Button>Submit</Form.Button>
        </Form>
          <br />
          <br />
        <Footer />
      </>
    )
  }
}

export default AboutEditForm