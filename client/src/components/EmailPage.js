import React from 'react'
import axios from 'axios';
import { Table, Header, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Scholarship from './Scholarship'
import Subscribers from './Subscribers'


class EmailPage extends React.Component {
    state = { applications: [] }
    
    componentDidMount() {
      axios.get('/api/applications')
        .then(res => this.setState({ applications: res.data }))
    }

    render() {
      const { applications } = this.state
        return (
        <>
        <Container>
            <br/>
          <Header>DevPoint Labs Applications</Header>
            <Table style={{ position: "relative", marginBottom: "5em" }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>First Name</Table.HeaderCell>
                  <Table.HeaderCell>Last Name</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Phone Number</Table.HeaderCell>
                  <Table.HeaderCell>Contacted?</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                { applications.map( application =>
                <Table.Row  key={application.id}>
                <Link to={`/applications/${application.id}`}>
                  <Table.Cell>{application.first_name}</Table.Cell>
                </Link>
                  <Table.Cell>{application.last_name}</Table.Cell>
                  <Table.Cell>{application.email}</Table.Cell>
                  <Table.Cell>{application.phone_number}</Table.Cell>
                </Table.Row>
               )}
              </Table.Body>
            </Table>
         <Scholarship />
         <br/>
         
         <Subscribers />
        </Container>
        </>       
        )
    }
}

export default EmailPage