import * as React from 'react'
import * as ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from '../index'
import * as State from '../../../state'
import { MemoryRouter } from 'react-router-dom'

describe('App', function() {
  it('should render without crashing', function() {
    const div = document.createElement('div')
    ReactDOM.render(
      <State.Provider store={State.store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </State.Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches with snapshot', function() {
    const app = renderer.create(
      <State.Provider store={State.store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </State.Provider>
    )
    let tree = app.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
