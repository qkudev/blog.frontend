import { Action } from './actions'

export interface IState extends LoadableState {
  byId: { [id: string]: IPost }
  allIds: string[]
  pagination: {
    page: number
    limit: number
  }
}

export const initState: IState = {
  loading: false,
  error: undefined,
  byId: {},
  allIds: [],
  pagination: {
    page: 1,
    limit: 10
  }
}

const initAction: InitAction = {
  type: '@@INIT',
  payload: undefined
}

export function reducer(
  state: IState = initState,
  action: Action = initAction
): IState {
  switch (action.type) {
    case 'POSTS_GET_BEGIN':
      return { ...state, loading: true, error: undefined }
    case 'POSTS_GET_SUCCESS': {
      let byId = { ...state.byId }
      const newIds = action.payload.posts.map(post => {
        byId[post.id] = post
        return post.id
      })
      return {
        ...state,
        loading: false,
        error: undefined,
        byId,
        allIds: [...state.allIds, ...newIds],
        pagination: {
          page: state.pagination.page + 1,
          limit: state.pagination.limit
        }
      }
    }
    case 'POSTS_GET_FAIL':
      return { ...state, loading: false, error: action.payload.error }
    default:
      return state
  }
}
