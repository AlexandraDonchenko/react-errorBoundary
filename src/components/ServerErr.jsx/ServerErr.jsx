import React from 'react'
import { withRouter } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import serverError from '../../images/server_error.png'

const ServerErr = () => (
  <div style={{
    width: '100vw', height: '100vh', backgroundColor: 'white', flexDirection: 'column',
  }}
  >
    <Image src={serverError} centered style={{ width: '900px', height: '540px' }} />
    <div style={{ fontSize: '20pt', textAlign: 'center' }}> INTERNAL SERVER ERROR</div>
  </div>
)
export default withRouter(ServerErr)
