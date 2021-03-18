import React from 'react'
import ServerErr from '../ServerErr.jsx/ServerErr'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    //
    console.log('WE HAVE ERROR', error)
  }

  render() {
    const { children } = this.props
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ServerErr />
    }

    return children
  }
}
export default ErrorBoundary
