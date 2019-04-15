type GetPostsBegin = IAction<'POSTS_GET_BEGIN', undefined>
type GetPostsSuccess = IAction<
  'POSTS_GET_SUCCESS',
  { posts: IPost[]; pagination: Pagination }
>
type GetPostsFail = IAction<'POSTS_GET_FAIL', { error: any }>

export type Action = InitAction | GetPostsBegin | GetPostsSuccess | GetPostsFail

export const getPostsBegin = (): GetPostsBegin => ({
  type: 'POSTS_GET_BEGIN',
  payload: undefined
})

export const getPostsSuccess = (
  posts: IPost[],
  pagination: Pagination
): GetPostsSuccess => ({
  type: 'POSTS_GET_SUCCESS',
  payload: {
    posts,
    pagination
  }
})

export const getPostsFail = (error: any): GetPostsFail => ({
  type: 'POSTS_GET_FAIL',
  payload: { error }
})
