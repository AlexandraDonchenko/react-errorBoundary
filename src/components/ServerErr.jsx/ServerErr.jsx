import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Segment, Image } from 'semantic-ui-react'
import serverError from '../../images/server_error.png'

const ServerErr = () => (
  <Container>
    <Segment>
      <Image src={serverError} size='large' centered style={{ padding: '20px' }} />
    </Segment>
  </Container>
)
export default withRouter(ServerErr)
