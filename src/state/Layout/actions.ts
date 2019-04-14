type LoadingBegin = IAction<'LAYOUT_LOADING_BEGIN', undefined>
type LoadingSuccess = IAction<'LAYOUT_LOADING_SUCCESS', undefined>
type LoadingFail = IAction<'LAYOUT_LOADING_FAIL', { error: any }>

export type Action = InitAction | LoadingBegin | LoadingSuccess | LoadingFail

export const loadingBegin = (): LoadingBegin => ({
  type: 'LAYOUT_LOADING_BEGIN',
  payload: undefined
})

export const loadingSuccess = (): LoadingSuccess => ({
  type: 'LAYOUT_LOADING_SUCCESS',
  payload: undefined
})

export const loadingFail = (error: any): LoadingFail => ({
  type: 'LAYOUT_LOADING_FAIL',
  payload: { error }
})
