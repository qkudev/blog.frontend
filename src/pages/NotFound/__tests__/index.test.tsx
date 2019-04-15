import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import NotFoundPage from '../index'

describe('NotFoundPage', function() {
  test('Matches with snapshot', function() {
    const notFoundPage = renderer.create(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    )
    let tree = notFoundPage.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
