import React from 'react'
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import  Footer  from './Footer'

const ContactSubmitPage = () => (
    <>
        <Header as='h2' textAlign='center'>
            Thank you for contacting us, you we hear back from us within 24hrs
            <br/>
                <Link to='/'>Home</Link>
        </Header>
        <Footer />
    </>
)

export default ContactSubmitPage