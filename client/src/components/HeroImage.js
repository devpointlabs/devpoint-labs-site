import React from 'react'
import { Grid, Card} from 'semantic-ui-react'

const HeroImage = () => {
    return (
        <>
        <br/>
        <br/>
            <Grid>
                <Card style={styles.cardSize}>
                    <Card.Header style={styles.headerFont}>
                        DEVPOINT LABS | WEB DEVELOPMENT
                    </Card.Header>
                    <Card.Meta>
                        Part-time Web Development
                    </Card.Meta>
                    <Card.Description>
                            Learn why we're the best at what we do
                    </Card.Description>
                </Card>
            </Grid>
            </>
    )
}


const styles = {
    cardSize: {
        width: '150%',
        height: '30em'
    },

    headerFont: {
        fontSize: '2em'
    }
}

export default HeroImage