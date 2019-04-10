import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Container, Card } from 'semantic-ui-react'

class ContactsView extends React.Component {
    state = { contact: {} }


 componentDidMount() {
     const { id } = this.props.match.params
     axios.get(`/api/contacts/${id}`)
        .then( res => this.setState({ contact: res.data}))
 }

    render() {
        const { firstname, lastname, email, phone, comments } = this.state.contact
        return (
           <Container>
               <Card>
                   <Card.Content>
                       <Card.Header>
                           { firstname }
                           <br/>
                           { lastname}
                       </Card.Header>
                            { email }
                            { phone }
                            { comments }
                   </Card.Content>
               </Card>
           </Container>
        )
    }
}

export default withRouter(ContactsView)