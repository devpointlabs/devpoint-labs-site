import React from 'react'
import { Header, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import  Footer  from '../MAIN/Footer'

const ContactSubmitPage = () => (
    <>


        <Header style={{ fontSize: '4em'}} textAlign='center'>
            Thank you for contacting us 
            <br/>
            <em>
                <h3 style={{textAlign: 'center'}}>
                    You will hear back from us within 24 hours
                </h3>
            </em>
            <Button floated='centered' color='inverted black'>
                <Link to="/"> Home </Link>
            </Button>
        </Header>

        <Footer />
    </>
)

export default ContactSubmitPage