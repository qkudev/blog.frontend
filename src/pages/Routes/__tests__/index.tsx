import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import * as State from '../../../state'
import Routes from '../index'

describe('Routes', function() {
  test('Matches with snapshot', function() {
    const routes = renderer.create(
      <State.Provider store={State.store}>
        <MemoryRouter>
          <Routes />
        </MemoryRouter>
      </State.Provider>
    )
    let tree = routes.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
