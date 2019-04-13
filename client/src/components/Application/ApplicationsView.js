import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Container, Item } from 'semantic-ui-react'


class ApplicationsView extends React.Component {
    state = { application: {} }

    componentDidMount() {

        const { id } = this.props.match.params
        axios.get(`/api/applications/${id}`)
            .then(res => this.setState({ application: res.data }))
    }

    render() {
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
                <h1>DPL Applicant </h1>
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
                                <em><h4>Current City</h4></em>
                                <p> {current_city}</p>
                                <br />
                                <em><h4>Why are you applying to DevPoint Labs?</h4></em>
                                <p> {comments}</p>
                                <br />
                                <em><h4>What is your education background</h4></em>
                                <p>{comments1}</p>
                                <br />
                                <em><h4>What hobies do you have and what are you passionate about in life?</h4></em>
                                <p>{comments2}</p>
                                <br />
                                <em><h4>Which course are you interested in?</h4></em>
                                <p>{course}</p>
                                <br />
                                <em><h4>Which location are you interested in?</h4></em>
                                <p>{location}</p>
                                <br />
                                <em><h4>What do you want to do after graduating?</h4></em>
                                <p>{grad}</p>
                                <br />
                                <em><h4>What is your coding background?</h4></em>
                                <p>{experience}</p>
                                <br />
                                <em><h4>What is your gender?</h4></em>
                                <p>{gender}</p>
                                <br />
                                <em><h4>How did you hear about us?</h4></em>
                                <p>{social}</p>
                                <br />

                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Container>
        )
    }
}

export default withRouter(ApplicationsView)