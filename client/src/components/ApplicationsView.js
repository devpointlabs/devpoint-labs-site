import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Card, Container, Header } from 'semantic-ui-react'


class ApplicationsView extends React.Component {
    state = { application: {} }

    componentDidMount() {

        const { id } = this.props.match.params     
          axios.get(`/api/applications/${id}`)
            .then( res => this.setState({ application: res.data }))
    }

    render () {
        const { 
            first_name, 
            last_name, 
            email, 
            phone_number, 
            current_city, 
            comments, 
            comments1, 
            comments2, 
            course, 
            location, 
            grad, 
            experience, 
            gender, 
            social 
        } = this.state.application

        return (
            <Container>
                <br />
           <Card>
               <Card.Content>
                   <Card.Header>
                    {first_name}
                    {" "}
                    {last_name}
                    </Card.Header>
                
                   <br/>
                   { email }
                   <br/>
                   { phone_number }
                    <br/>
                    { current_city }
                    <br/>
                    { comments }
                    <br/>
                    { comments1 }
                    <br/>
                    { comments2 }
                    <br/>
                    { course }
                    <br/>
                    { location }
                    <br/>
                    { grad }
                    <br/>
                    { experience }
                    <br/>
                    { gender }
                    <br/>
                    { social }
               </Card.Content>
           </Card>
            </Container>
        )
    }
}

export default withRouter(ApplicationsView)