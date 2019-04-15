import * as React from 'react'
import renderer from 'react-test-renderer'
import Post from '../index'

const mockPost: IPost = {
  _id: 'qwerty',
  body: 'Some text',
  updatedAt: '2019-04-14T23:41:36.340Z',
  createdAt: '2019-04-14T23:41:36.340Z',
  __v: 0
}

describe('Component:Post', function() {
  test('Matches with snapshot', function() {
    const post = renderer.create(<Post {...mockPost} />)
    let tree = post.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
