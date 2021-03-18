import React from 'react'
import { Grid, Menu, Input } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

import { seedDevices } from 'seedData/devices.json'
import DeviceList from './DeviceList'
import ErrorBoundary from '../main/ErrorBoundry'

const Devices = () => (
  <ErrorBoundary>
    {' '}
    <Grid>
      <Grid.Row>
        <Menu position='right'>
          <Menu.Item>
            <Input
              icon='search'
              iconPosition='left'
              placeholder='fake search :O'
            />
          </Menu.Item>
        </Menu>
      </Grid.Row>

      <Grid.Row>
        <DeviceList devices={seedDevices} />
      </Grid.Row>

    </Grid>
  </ErrorBoundary>
)

export default withRouter(Devices)
