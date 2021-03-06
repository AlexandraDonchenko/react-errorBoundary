import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Segment, Image } from 'semantic-ui-react'

import theGiant from 'images/The_Giant.jpg'
import ErrorBoundary from '../main/ErrorBoundary'

const Profile = () => (
  <ErrorBoundary>
    <Container>
      <Segment>
        <Image src={theGiant} size='large' centered style={{ padding: '20px' }} />
      </Segment>
    </Container>
  </ErrorBoundary>
)

export default withRouter(Profile)
