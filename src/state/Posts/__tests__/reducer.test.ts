import * as Posts from '../index'
import { Actions } from '../index'

const testPosts: IPost[] = [
  {
    id: 'q1w2e3r4t5y6',
    body: '# Testing Post',
    createdAt: '2019-04-13T13:45:33.529Z',
    updatedAt: '2019-04-13T13:45:33.529Z'
  }
]

const testError = 'TestError'

describe('Posts:reducer', function() {
  it('should be equal to initial state', function() {
    const initState = Posts.reducer()
    expect(initState).toEqual(Posts.initState)
  })
  it('should reduce actions', function() {
    const getPostsBegin = Actions.getPostsBegin()
    const getPostsSuccess = Actions.getPostsSuccess(testPosts)
    const getPostsFail = Actions.getPostsFail(testError)

    const initState = Posts.reducer()
    expect(initState).toEqual(Posts.initState)

    const afterGetPostsBegin = Posts.reducer(initState, getPostsBegin)
    expect(afterGetPostsBegin).toEqual({
      ...initState,
      loading: true
    })

    const afterGetPostsSuccess = Posts.reducer(
      afterGetPostsBegin,
      getPostsSuccess
    )
    expect(afterGetPostsSuccess).toEqual({
      ...afterGetPostsBegin,
      loading: false,
      byId: { q1w2e3r4t5y6: testPosts[0] },
      allIds: ['q1w2e3r4t5y6'],
      pagination: {
        page: 2,
        limit: 10
      }
    })

    const afterGetPostsFail = Posts.reducer(afterGetPostsBegin, getPostsFail)
    expect(afterGetPostsFail).toEqual({
      ...afterGetPostsBegin,
      loading: false,
      error: testError
    })
  })
})
