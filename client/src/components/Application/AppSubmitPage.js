import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Button } from 'semantic-ui-react'
import Footer from '../MAIN/Footer'

const AppSubmitPage = () => (
    <>
        <Header style={{ fontSize: '4em', height: '100%' }} textAlign='center'>
            Thank you for submitting your Application
            <br />
            <em>
                <h3 style={{ textAlign: 'center' }}>
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


export default AppSubmitPage