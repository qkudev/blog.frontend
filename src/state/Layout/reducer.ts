import { Action } from './actions'

export interface IState extends LoadableState {}

export const initState: IState = {
  loading: false,
  error: undefined
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
    case 'LAYOUT_LOADING_BEGIN':
      return { ...state, loading: true }
    case 'LAYOUT_LOADING_SUCCESS':
      return { ...state, loading: false, error: undefined }
    case 'LAYOUT_LOADING_FAIL':
      return { ...state, loading: false, error: action.payload.error }
    default:
      return state
  }
}
