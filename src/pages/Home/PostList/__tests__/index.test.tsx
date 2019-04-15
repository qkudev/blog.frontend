import * as React from 'react'
import renderer from 'react-test-renderer'
import { store, Provider, Posts } from '../../../../state'
import PostList from '../index'

const testPosts: IPost[] = [
  {
    _id: 'qwerty',
    body: 'Some text',
    updatedAt: '2019-04-14T23:41:36.340Z',
    createdAt: '2019-04-14T23:41:36.340Z',
    __v: 0
  }
]

const testPagination: Pagination = {
  page: 1,
  limit: 10,
  total: 0,
  pages: 1
}

const testError = 'TestError'

describe('Components::PostList', function() {
  it('should match snapshot with loading state', function() {
    store.dispatch(Posts.Actions.getPostsBegin())

    const postList = renderer.create(
      <Provider store={store}>
        <PostList {...store.getState().posts} />
      </Provider>
    )
    let tree = postList.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot with success state', function() {
    store.dispatch(Posts.Actions.getPostsSuccess(testPosts, testPagination))

    const postList = renderer.create(
      <Provider store={store}>
        <PostList {...store.getState().posts} />
      </Provider>
    )
    let tree = postList.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot with fail state', function() {
    store.dispatch(Posts.Actions.getPostsFail(testError))

    const postList = renderer.create(
      <Provider store={store}>
        <PostList {...store.getState().posts} />
      </Provider>
    )
    let tree = postList.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
