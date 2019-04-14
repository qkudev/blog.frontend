type GetPostsBegin = IAction<'POSTS_GET_BEGIN', undefined>
type GetPostsSuccess = IAction<'POSTS_GET_SUCCESS', { posts: IPost[] }>
type GetPostsFail = IAction<'POSTS_GET_FAIL', { error: any }>

export type Action = InitAction | GetPostsBegin | GetPostsSuccess | GetPostsFail

export const getPostsBegin = (): GetPostsBegin => ({
  type: 'POSTS_GET_BEGIN',
  payload: undefined
})

export const getPostsSuccess = (posts: IPost[]): GetPostsSuccess => ({
  type: 'POSTS_GET_SUCCESS',
  payload: { posts }
})

export const getPostsFail = (error: any): GetPostsFail => ({
  type: 'POSTS_GET_FAIL',
  payload: { error }
})
