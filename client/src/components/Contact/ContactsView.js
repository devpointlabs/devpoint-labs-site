import React from 'react'
import axios from 'axios';
import { withRouter, Link, } from 'react-router-dom'
import { Container, Item, Button, Segment } from 'semantic-ui-react'

class ContactsView extends React.Component {
    state = { contact: {} }


    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`/api/contacts/${id}`)
            .then(res => this.setState({ contact: res.data }))
    }

    handleChange = (e, { notes, value }) => {
        this.setState({ [notes]: value })
    }

    render() {
        const { id, firstname, lastname, email, phone, comments } = this.state.contact
        return (
            <Container>
                <Button>
                    <Link to={`/Contacts/${id}/edit`} as={Button}>Edit</Link>
                </Button>
                <Item.Group>
                    <Segment>
                        <Item.Content>
                            <Item.Header>
                                {firstname}{" "}{lastname}
                            </Item.Header>
                            <br />
                            <Item.Header as='a'>{email}</Item.Header>
                            <br />
                            <Item.Header as='a'>{phone}</Item.Header>
                            <br />
                            <Item.Header as='a'>{comments}</Item.Header>
                            <br />
                        </Item.Content>
                    </Segment>
                </Item.Group>
            </Container>
        )
    }
}

export default withRouter(ContactsView)