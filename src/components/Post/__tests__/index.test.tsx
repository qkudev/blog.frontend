import * as React from 'react'
import renderer from 'react-test-renderer'
import Post from '../index'

describe('Post', function() {
  const mockPost: IPost = {
    id: 1,
    url: 'some.url',
    body: 'Some text',
    cdatetime: '2019-04-06T00:37:20.178Z'
  }
  test('Matches with snapshot', function() {
    const post = renderer.create(<Post {...mockPost} />)
    let tree = post.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
