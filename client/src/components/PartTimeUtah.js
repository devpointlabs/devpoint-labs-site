import React from 'react'
import { Card, Grid } from 'semantic-ui-react'


const PartTimeUtah = () => {
    return (
        <>
        <br/>
        <br/>
            <Grid>
                <Card style={ styles.cardSize}>
                    <Card.Header>
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
        padding: '10em',
        width: '30em',
        height: '25em',

    }
}

export default PartTimeUtah