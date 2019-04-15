import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import Footer from './Footer'

const AppSubmitPage = () => (
        <>
            <Header as='h2' textAlign="center">
            Thank you for submitting your application, you will here back from us in 24 hours!
            <br/>
            <br/>
            Click here to return
            <Link to='/' > Home </Link>

            </Header>
            <br/>
            <br/>

            <Footer />
        </>
    )


export default AppSubmitPage