import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Button } from 'semantic-ui-react'
import Footer from './Footer'

const AppSubmitPage = () => (
        <>
         <Header style={{ fontSize: '4em'}} textAlign='center'>
            Thank you for submitting your Application
            <br/>
            <em>
                <h3 style={{textAlign: 'center'}}>
                    You will hear back from us within 24 hours
                </h3>
            </em>
                <Button to='/' floated='centered' color='blue'>Home</Button>
        </Header>
            <Footer />
        </>
    )


export default AppSubmitPage