import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import Header from '../index'

describe('Header', function() {
  test('Matches with snapshot', function() {
    const header = renderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    let tree = header.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
