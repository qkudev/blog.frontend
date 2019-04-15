import * as Posts from '../index'
import { Actions } from '../index'

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

describe('State::Posts::Reducer', function() {
  it('should be equal to initial state', function() {
    const initState = Posts.reducer()
    expect(initState).toEqual(Posts.initState)
  })

  it('should reducer get posts begin action', function() {
    const getPostsBegin = Actions.getPostsBegin()
    const afterPostsBegin = Posts.reducer(undefined, getPostsBegin)

    expect(afterPostsBegin).toEqual({
      ...Posts.initState,
      loading: true,
      error: undefined
    })
  })

  it('should reduce get posts success action', function() {
    const getPostsSuccess = Actions.getPostsSuccess(testPosts, testPagination)

    const afterGetPostsSuccess = Posts.reducer(undefined, getPostsSuccess)
    expect(afterGetPostsSuccess).toEqual({
      ...Posts.initState,
      loading: false,
      byId: { qwerty: testPosts[0] },
      allIds: ['qwerty'],
      pagination: testPagination
    })
  })

  it('should reduce get posts fail action', function() {
    const getPostsFail = Actions.getPostsFail(testError)
    const afterPostsFail = Posts.reducer(undefined, getPostsFail)

    expect(afterPostsFail).toEqual({
      ...Posts.initState,
      loading: false,
      error: testError
    })
  })
})
