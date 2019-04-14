import { Actions } from '../index'

const testPosts: IPost[] = [
  {
    id: 'q1w2e3r4t5y6',
    body: '# Testing Post',
    createdAt: '2019-04-13T13:45:33.529Z',
    updatedAt: '2019-04-13T13:45:33.529Z'
  }
]

describe('Posts:Actions', function() {
  it('should create posts actions', function() {
    const getPostsBegin = Actions.getPostsBegin()
    const getPostsSuccess = Actions.getPostsSuccess(testPosts)
    const getPostsFail = Actions.getPostsFail('TestingError')

    expect(getPostsBegin).toEqual({
      type: 'POSTS_GET_BEGIN',
      payload: undefined
    })
    expect(getPostsSuccess).toEqual({
      type: 'POSTS_GET_SUCCESS',
      payload: {
        posts: testPosts
      }
    })
    expect(getPostsFail).toEqual({
      type: 'POSTS_GET_FAIL',
      payload: {
        error: 'TestingError'
      }
    })
  })
})
