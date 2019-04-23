import React from 'react'
import axios from 'axios';
import { Table, Container, Header, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import wallpaper from "../../assets/images/qbkls.png";

class Contacts extends React.Component {
    state = { contacts: [] }

    componentDidMount() {
        axios.get(`/api/contacts`)
            .then(res => this.setState({ contacts: res.data }))
    }

    handleDelete = (id) => {
        axios.delete(`/api/contacts/${id}`)
            .then(res => {
                const { contacts } = this.state
                this.setState({ contacts: contacts.filter(t => t.id !== id) })
            })
    }


    render() {
        const { contacts } = this.state
        return (
            <>
            <div style={{  background: `url(${wallpaper})`, positon: "absolute", height: '100%', paddingBottom: '45em'  }} >
                <Container>
                    <Header>People Who need More info</Header>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>
                                    First Name
                            </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Last Name
                            </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Email
                            </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Phone
                            </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Delete
                            </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {contacts.map(contact =>
                                <Table.Row key={contact.id}>
                                    <Table.Cell>
                                        {contact.firstname}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {contact.lastname}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {contact.email}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {contact.phone}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button color='purple'>
                                            <Link to={`/Contacts/${contact.id}/edit`} as={Button}><Icon name='pencil' size='small' /></Link>
                                        </Button>
                                        <Button onClick={() => this.handleDelete(contact.id)} color='black'>
                                            <Icon name='trash' size='small' />
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Container>
                </div>
            </>
        )
    }
}

export default Contacts