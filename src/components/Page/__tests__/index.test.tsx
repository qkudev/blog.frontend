import * as React from 'react'
import renderer from 'react-test-renderer'
import Page from '../index'

describe('Page', function() {
  test('Matches with snapshot', function() {
    const page = renderer.create(<Page />)
    let tree = page.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
