import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Segment, Image } from 'semantic-ui-react'
import Oskar_Kokoschka from 'images/Oskar_Kokoschka.jpg'
import ErrorBoundary from '../main/ErrorBoundry'

const Changelog = () => (
  <ErrorBoundary>
    <Container>
      <Segment>
        <Image src={Oskar_Kokoschka} size='large' centered style={{ padding: '20px' }} />
      </Segment>
    </Container>
  </ErrorBoundary>
)

export default withRouter(Changelog)
