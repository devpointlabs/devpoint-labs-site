import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Container, Card } from 'semantic-ui-react';

class ScholarshipsView extends React.Component {
    state = { scholarship: {} }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`/api/scholarships/${id}`)
            .then( res => this.setState({ scholarship: res.data }))
    }

    render () {
        const { 
            first_name, 
            last_name, 
            email, 
            phone_number, 
            comments, 
            comments1, 
            comments2, 
            comments3 
        } = this.state.scholarship
        
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
                    { comments }
                    <br/>
                    { comments1 }
                    <br/>
                    { comments2 }
                    <br/>
               </Card.Content>
           </Card>
            </Container>
        )
    }
}


export default withRouter(ScholarshipsView)