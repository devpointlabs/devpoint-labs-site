import React from 'react'
import styled from 'styled-components'

const HowToApply = () => (
  <Grid relaxed columns={4}>
    <Grid.Row rows={2}>
      <Grid.Column>
        <Header>
          How To Apply
        </Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column width={3}>
        Apply
      </Grid.Column>
      <Grid.Column width={3}>
        Essay & Reccomendations
      </Grid.Column>
      <Grid.Column width={3}>
        Follow Us
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default HowToApply