import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'
import Layout from '../index'

describe('Layout', function() {
  test('Matches with snapshot', function() {
    const layout = renderer.create(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    let tree = layout.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Matches with error snapshot', function() {
    const errorLayout = renderer.create(
      <MemoryRouter>
        <Layout error='LayoutError' />
      </MemoryRouter>
    )
    let tree = errorLayout.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Matches with loading snapshot', function() {
    const loadingLayout = renderer.create(
      <MemoryRouter>
        <Layout loading={true} />
      </MemoryRouter>
    )
    let tree = loadingLayout.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
