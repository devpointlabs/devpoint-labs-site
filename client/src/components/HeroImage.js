import React from 'react'
import { Grid, Card, Container, Button} from 'semantic-ui-react'

const HeroImage = () => {
    return (
        <>
        <br/>
        <br/>



            <Grid>
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
            </Grid>


            </>
    )
}


const styles = {
    cardSize: {
        width: '90%',
        height: '35em',
        paddingTop: '10em',
        marginLeft: '5em'
    },

    headerFont: {
        fontSize: '4em',
        textAlign: 'center'
    },
    
 

    descFont: {
        fontSize: '2em',
        textAlign: 'center'
    }
}



export default HeroImage