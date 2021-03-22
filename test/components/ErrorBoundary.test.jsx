import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ErrorBoundary from 'components/main/ErrorBoundary'
import ServerAPI from '../../src/utils/ServerAPI'

test('Renders error page when error thrown inside child-component', () => {
  function ComponentWithError() {
    throw new Error({ errorName: 'Error thrown from problem child' })
  }

  beforeEach(() => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
  })

  afterEach(() => {
    console.error.mockRestore()
  })

  const myMethodMock = jest.fn()
  ServerAPI.reportError = myMethodMock.bind(ServerAPI)
  const { container } = render(
    <ErrorBoundary>
      <ComponentWithError />
    </ErrorBoundary>
  )
  expect(container).toHaveTextContent('INTERNAL SERVER ERROR')
  expect(myMethodMock).toHaveBeenCalledTimes(1)
})
