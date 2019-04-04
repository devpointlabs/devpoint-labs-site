import React from 'react'
import { Grid, Card, Container, Button, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import media from '../theme/media'
import styled from 'styled-components'

const HeroImage = () => {
    return (
        <>
        <br/>
        <br/>



            <GridStyle>
                <Grid.Column mobile={16} tablet={8} computer={18}>
                    <Card style={styles.cardSize} >
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
                    </Card>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column>
                        <Card style={styles.cardSize2}>
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
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Column mobile={16} tablet={8} computer={18}>
                    <Card style={styles.cardSize} >
                        <Card.Header style={styles.headerFont3}>
                            A Day in the lift at
                            <br/>
                            DevPoint Labs
                        </Card.Header>
                        <Link to='/' style={styles.linkSize}>Action Link</Link>
                    </Card>
                </Grid.Column>
            </GridStyle>


            </>
    )
}

const GridStyle = styled(Grid)`
    margin: 5em
    ${ media.tablet`
        padding-left: 10px !important
        padding-right: 80px !important
        padding-top: 15px !important
 `}
    margin: 5em
    ${ media.phone`
        padding-left: 10px !important
        padding-right: 80px !important
        padding-top: 15px !important
 `}
    `


const styles = {
    cardSize: {
        width: '90%',
        height: '35em',
        paddingTop: '10em',
        marginBottom: '-2em',
        marginLeft: '5em'
    },

    cardSize2: {
        width: '90%',
        height: '20em',
        marginLeft: '6em',
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