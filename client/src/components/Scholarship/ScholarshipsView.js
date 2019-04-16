import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { Container, Grid, Segment, Item, Button } from 'semantic-ui-react';

class ScholarshipsView extends React.Component {
    state = { scholarship: {} }

    componentDidMount() {
        const { match: { params: {id }},} = this.props
        axios.get(`/api/scholarships/${id}`)
            .then(res => {
                this.setState({ scholarship: res.data })
            })
            .catch(err => {
                console.log(err.response)
            })
    }   

    handleChange = (e, { notes, value }) => {
        this.setState({ [notes]: value })
    }


    render() {
        const {
            id,
            first_name,
            last_name,
            email,
            phone_number,
            course,
            comments,
            comments1,
            comments2,
            comments3,
            notes
        } = this.state.scholarship;

        return (
            <Container>
                <h1>Scholarship Applicant </h1>
                <Button>
                    <Link to={`/Scholarships/${id}/edit`} as={Button}> Edit </Link>
                </Button>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>

                            <Item.Group>
                                <Item>
                                    <Item.Content>
                                        <Segment>

                                            <Item.Header as='a'>{first_name}{" "}{last_name}</Item.Header>
                                            <br />
                                            <Item.Header as='a'>{email}</Item.Header>
                                            <br />
                                            <Item.Header as='a'>{phone_number}</Item.Header>
                                            <br />
                                        </Segment>
                                        <Item.Description>
                                            <Segment>
                                                <em><h4>Which course are you interested in?</h4></em>
                                                <p> {course}</p>
                                            <br />
                                            </Segment>
                                            <Segment>
                                                <em><h4>Tell us about your background</h4></em>
                                                <p>{comments}</p>
                                            <br />
                                            </Segment>
                                            <Segment>
                                                <em><h4>Why do you want to be a devleoper?</h4></em>
                                                <p>{comments1}</p>
                                            <br />
                                            </Segment>
                                            <Segment>
                                                <em><h4>What skills do you currently have (Photoshop, HTML, etc...)?</h4></em>
                                                <p>{comments2}</p>
                                            <br />
                                            </Segment>
                                            <Segment>
                                                <em><h4>What would you do with the skills you gain at DevPoint Labs?</h4></em>
                                                <p>{comments3}</p>
                                            </Segment>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment style={{ height: "100%" }}>
                                <h4> NOTES </h4>
                                <p> {notes} </p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}


export default withRouter(ScholarshipsView)