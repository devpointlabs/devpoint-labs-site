import React from 'react'
import axios from 'axios';
import Profile from './Profile'
import { Table, Header, Container, Button, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Scholarship from '../Scholarship/Scholarship'
import Subscribers from './Subscribers'
import Contacts from '../Contact/Contacts'


class EmailPage extends React.Component {
    state = { applications: [] }
    
    componentDidMount() {
      axios.get('/api/applications')
        .then(res => this.setState({ applications: res.data }))
    }

    handleDelete = id => {
      axios.delete(`/api/applications/${id}`).then(res => {
        const { applications } = this.state;
        this.setState({ applications: applications.filter(t => t.id !== id) });
      });
    };

    render() {
      const { applications } = this.state
        return (
        <>
        <Profile />
        <Container>
            <br/>
          <Header>DevPoint Labs Applications</Header>
            <Table 
            celled 
            style={{ position: "relative", marginBottom: "5em" }}>
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
                { applications.map( application =>
                <Table.Row  key={application.id}>
                <Link to={`/applications/${application.id}`}>
                  <Table.Cell>{application.first_name}</Table.Cell>
                </Link>
                  <Table.Cell>{application.last_name}</Table.Cell>
                  <Table.Cell>{application.email}</Table.Cell>
                  <Table.Cell>{application.phone_number}</Table.Cell>
                  <Table.Cell>{application.course}</Table.Cell>
                  <Button
                     floated="right"
                     onClick={() => this.handleDelete(application.id)}
                     color="black"
                   >
                     <Icon name="trash" size="small" />
                   </Button>
                </Table.Row>
               )}
              </Table.Body>
            </Table>
         <Scholarship />
         <br/>
         <Contacts />
         <br/>

         <Subscribers />
        </Container>
        </>       
        )
    }
}

export default EmailPage