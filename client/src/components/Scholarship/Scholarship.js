import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Table, Header, Icon, Button } from 'semantic-ui-react'



class Scholarship extends React.Component {
  state = { scholarships: [] }

  componentDidMount() {
    axios.get('/api/scholarships')
      .then(res => this.setState({ scholarships: res.data }))
  }

  handleDelete = (id) => {
    axios.delete(`/api/scholarships/${id}`)
      .then(res => {
        const { scholarships } = this.state
        this.setState({ scholarships: scholarships.filter(t => t.id !== id) })
      })
  }

  render() {
    const { scholarships } = this.state
    return (
      <>
        <Header>Scholarship Applications</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
              <Table.HeaderCell>Course</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {scholarships.map(scholarship =>
              <Table.Row key={scholarship.id}>
                <Link to={`/scholarships/${scholarship.id}`}>
                  <Table.Cell>{scholarship.first_name}</Table.Cell>
                </Link>
                <Table.Cell>{scholarship.last_name}</Table.Cell>
                <Table.Cell>{scholarship.email}</Table.Cell>
                <Table.Cell>{scholarship.phone_number}</Table.Cell>
                <Table.Cell>{scholarship.course}</Table.Cell>
                <Table.Cell>
                  <Button floated='right' onClick={() => this.handleDelete(scholarship.id)} color='black'>
                    <Icon name='trash' />
                  </Button>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </>
    )
  }
}

export default Scholarship