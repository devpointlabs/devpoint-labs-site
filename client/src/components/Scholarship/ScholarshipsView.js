import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Container, Item } from 'semantic-ui-react';

class ScholarshipsView extends React.Component {
    state = { scholarship: {} }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`/api/scholarships/${id}`)
            .then(res => this.setState({ scholarship: res.data }))
    }

    render() {
        const {
            first_name,
            last_name,
            email,
            phone_number,
            course,
            comments,
            comments1,
            comments2,
            comments3
        } = this.state.scholarship;

        return (
            <Container>
                <h1>Scholarship Applicant </h1>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header as='a'>{first_name}{" "}{last_name}</Item.Header>
                            <br />
                            <Item.Header as='a'>{email}</Item.Header>
                            <br />
                            <Item.Header as='a'>{phone_number}</Item.Header>
                            <br />
                            <Item.Description>
                                <em><h4>Which course are you interested in?</h4></em>
                                <p> {course}</p>
                                <br />
                                <em><h4>Tell us about your background</h4></em>
                                <p>{comments}</p>
                                <br />
                                <em><h4>Why do you want to be a devleoper?</h4></em>
                                <p>{comments1}</p>
                                <br />
                                <em><h4>What skills do you currently have (Photoshop, HTML, etc...)?</h4></em>
                                <p>{comments2}</p>
                                <br />
                                <em><h4>What would you do with the skills you gain at DevPoint Labs?</h4></em>
                                <p>{comments3}</p>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Container>
        )
    }
}


export default withRouter(ScholarshipsView)