import React from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'
import { Container, Item, Button, Grid, Segment } from 'semantic-ui-react'


class ApplicationsView extends React.Component {
    state = { application: {}, }

    componentDidMount() {
        const { match: { params: {id }},} = this.props
        axios.get(`/api/applications/${id}`)
            .then(res => {
                this.setState({ application: res.data })
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
            current_city,
            comments,
            comments1,
            comments2,
            course,
            location,
            grad,
            experience,
            gender,
            social,
            notes
        } = this.state.application

        return (
            <>
            <Container>
                <h1>DPL Applicant </h1>
                <Button>
                    <Link to={`/Applications/${id}/edit`} as={Button}>Edit</Link>
                </Button>
                <Grid columns={2}>
                <Grid.Row>
                <Grid.Column>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Segment>
                                <Item.Header as='h4'>{first_name}{" "}{last_name}</Item.Header>
                                <br />
                                <Item.Header as='a'>{email}</Item.Header>
                                <br />
                                <Item.Header as='a'>{phone_number}</Item.Header>
                                <br />
                                </Segment>
                                
                                <Item.Description>
                                    <Segment>
                                    <em><CardTitle>Current City</CardTitle></em>
                                    <br />
                                    <p> {current_city}</p>
                                    <br />
                                    </Segment>
                                    <Segment>
                                    <em><CardTitle>Why are you applying to DevPoint Labs?</CardTitle></em>
                                    <br />
                                    <p> {comments}</p>
                                    <br />
                                    </Segment>
                                    <Segment>
                                    <em><CardTitle>What is your education background</CardTitle></em>
                                    <br />
                                    <p>{comments1}</p>
                                    <br />
                                    </Segment>
                                    <Segment>
                                    <em><CardTitle>What hobies do you have and what are you passionate about in life?</CardTitle></em>
                                    <br />
                                    <p>{comments2}</p>
                                    <br />
                                    </Segment>
                                    <Segment>
                                    <em><CardTitle>Which course are you interested in?</CardTitle></em>
                                    <br />
                                    <p>{course}</p>
                                    <br />
                                    </Segment>
                                    <Segment>
                                    <em><CardTitle>Which location are you interested in?</CardTitle></em>
                                    <br />
                                    <p>{location}</p>
                                    <br />
                                    </Segment>
                                    <Segment>
                                    <em><CardTitle>What do you want to do after graduating?</CardTitle></em>
                                    <br />
                                    <p>{grad}</p>
                                    <br />
                                    </Segment>
                                    <Segment>
                                    <em><CardTitle>What is your coding background?</CardTitle></em>
                                    <br />
                                    <p>{experience}</p>
                                    <br />
                                    </Segment>
                                    <Segment>
                                    <em><CardTitle>What is your gender?</CardTitle></em>
                                    <br />
                                    <p>{gender}</p>
                                    <br />
                                    </Segment>
                                    <Segment>
                                    <em><CardTitle>How did you hear about us?</CardTitle></em>
                                    <br />
                                    <p>{social}</p>
                                    <br />
                                    </Segment>
                                    
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment style={{ height: "100%" }}>
                            <h4>NOTES</h4>
                            <p>{notes}</p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
            <Container>
                    
            </Container>
            </>
        )
    }
}

const CardTitle = styled.p`
    font-size: 18px
    font-weight: 600
`

export default withRouter(ApplicationsView)