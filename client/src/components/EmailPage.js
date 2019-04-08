import React from 'react'
import axios from 'axios';
import { Table, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



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
            <Header>Applications</Header>
            <Table celled>
                
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                { applications.map( application =>
                    <Table.Row  key={application.id}>
                <Link to='/Applications'>
                <Table.Cell>{application.first_name}</Table.Cell>
                </Link>
                <Table.Cell>{application.last_name}</Table.Cell>
                <Table.Cell>{application.email}</Table.Cell>
                <Table.Cell>{application.phone_number}</Table.Cell>
                    </Table.Row>
                )}
                </Table.Body>
            </Table>
            </>
                
        )
    }
}

export default EmailPage