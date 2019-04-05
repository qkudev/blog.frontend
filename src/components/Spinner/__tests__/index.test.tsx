import * as React from 'react'
import renderer from 'react-test-renderer'
import Spinner from '../index'

describe('Spinner', function() {
  test('Matches with snapshot', function() {
    const header = renderer.create(<Spinner />)
    let tree = header.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
