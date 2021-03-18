import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Segment, Image } from 'semantic-ui-react'
import bio_box_futurism from 'images/bio_box_futurism.jpg'
import ErrorBoundary from '../main/ErrorBoundry'

const Profile = () => (
  <ErrorBoundary>
    <Container>
      <Segment>
        <Image src={bio_box_futurism} size='large' centered style={{ padding: '20px' }} />
      </Segment>
    </Container>
  </ErrorBoundary>
)

export default withRouter(Profile)
