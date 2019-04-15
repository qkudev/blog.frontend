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

describe('State::Posts::Actions', function() {
  it('should create get posts begin action', function() {
    const getPostsBegin = Actions.getPostsBegin()

    expect(getPostsBegin).toEqual({
      type: 'POSTS_GET_BEGIN',
      payload: undefined
    })
  })

  it('should create get posts success action', function() {
    const getPostsSuccess = Actions.getPostsSuccess(testPosts, testPagination)

    expect(getPostsSuccess).toEqual({
      type: 'POSTS_GET_SUCCESS',
      payload: {
        posts: testPosts,
        pagination: testPagination
      }
    })
  })

  it('should create get posts fail action', function() {
    const getPostsFail = Actions.getPostsFail(testError)

    expect(getPostsFail).toEqual({
      type: 'POSTS_GET_FAIL',
      payload: {
        error: testError
      }
    })
  })
})
