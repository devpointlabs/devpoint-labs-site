import React from 'react'
import { Grid, Card, Container, Button, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { media } from '../theme/media'
import styled from 'styled-components'

const HeroImage = () => {
    return (
        <>
        <br/>
        <br/>



            <Grid>
                

                    <Grid.Column mobile={16} tablet={8} computer={18}>
                        <CardStyle style={styles.cardSize} >
                            <Card.Header style={styles.headerFont}>
                                Getting Ready to design
                            </Card.Header>
                            <Card.Description style={styles.descFont}>
                                    After research, the designer must make sense
                                    <br/>
                                        of the data they've collected
                            </Card.Description>
                            <br />
                            <Button style={{ width: '7em', marginLeft: '50em'}}>
                                Button
                            </Button>
                        </CardStyle>
                    </Grid.Column>
                    <Grid.Row>
                        <Grid.Column>
                            <CardStyle style={styles.cardSize2}>
                                <Card.Header style={styles.headerFont2}>
                                    DevPoint lab's 11 week
                                </Card.Header>
                                <Card.Description style={styles.descFont2}>
                                    A visual guide coult be a wireframe, creative composition, or imformation
                                    <br/>
                                    architecture. A device that enables collaboration will lessen the chance
                                    <br/>
                                    of work having to be completely redone. A manager could creat a visual
                                    <br/>
                                                guide for the team to complete the build-out.
                                </Card.Description>
                            </CardStyle>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={18}>
                        <CardStyle1 style={styles.cardSize} >
                            <Card.Header style={styles.headerFont3}>
                                A Day in the life at
                                
                                DevPoint Labs
                            </Card.Header>
                            <Link to='/' style={styles.linkSize}>Action Link</Link>
                        </CardStyle1>
                    </Grid.Column>
            </Grid>


            </>
    )
}

const CardStyle = styled(Card)`
    margin: 5em
    ${ media.tablet`
        padding-left: 10px !important
        padding-right: 50px !important
        padding-top: 15px !important
 `}
    margin: 5em
    ${ media.phone`
        padding-left: 10px !important
        padding-right: 4px !important
        padding-top: 5px !important
 `}
    `
const CardStyle1 = styled(Card)`
    margin: 5em
    ${ media.tablet`
        padding-left: 10px !important
        padding-right: 50px !important
        padding-top: 15px !important
 `}
    margin: 5em
    ${ media.phone`
         padding-right: 9em 
        padding-top: 15px !important
        margin-right: 19em 
        font-size: 11px
 `}
    `


const styles = {
    cardSize: {
        width: '90%',
        height: '35em',
        paddingTop: '10em',
        marginBottom: '-2em',
        marginLeft: '2.6em'
    },

    cardSize2: {
        width: '90%',
        height: '20em',
        marginLeft: '3.3em',
        padding: '5em',
        marginBottom: '-2em'
       
    },

    headerFont: {
        fontSize: '4em',
        textAlign: 'center'
    },

    headerFont2: {
        fontSize: '2.5em',
        textAlign: 'center'
    },

    headerFont3: {
        fontSize: '3em',
        textAlign: 'left',
        paddingLeft: '3em'
    },
    
 

    descFont: {
        fontSize: '2em',
        textAlign: 'center'
    },

    descFont2: {
        fontSize: '1em',
        textAlign: 'center'
    },

    linkSize: {
        paddingLeft: '9em'
    }
}



export default HeroImage