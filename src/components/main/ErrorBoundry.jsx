import React from 'react'
import ServerErr from '../ServerErr.jsx/ServerErr'
import ServerAPI from '../../utils/ServerAPI'
import getDisplayableDaysHoursMinutes from '../../utils/time'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false, error: null, info: null, errorTime: null,
    }
  }

  //   static getDerivedStateFromError(error) {

  //   }

  componentDidCatch(error, errorInfo) {

    const date = new Date()
    this.setState({
      hasError: true, error, info: errorInfo, errorTime: date,
    })
  }

  render() {
    const { children } = this.props
    if (this.state.hasError) {
      ServerAPI.reportError(this.state.error, this.state.info.componentStack, this.state.errorTime)
      return <ServerErr />
    }

    return children
  }
}
export default ErrorBoundary
