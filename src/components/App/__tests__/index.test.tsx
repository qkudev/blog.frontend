import * as React from 'react'
import * as ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from '../index'
import { MemoryRouter } from 'react-router-dom'

describe('App', function() {
  it('should render without crashing', function() {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches with snapshot', function() {
    const app = renderer.create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    let tree = app.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
