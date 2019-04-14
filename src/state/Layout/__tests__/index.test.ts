import * as Layout from '../index'

describe('Layout state', function() {
  it('should create loading actions', function() {
    const loadingBegin = Layout.Actions.loadingBegin()
    const loadingSuccess = Layout.Actions.loadingSuccess()
    const loadingFail = Layout.Actions.loadingFail('TestError')

    expect(loadingBegin).toEqual({
      type: 'LAYOUT_LOADING_BEGIN',
      payload: undefined
    })
    expect(loadingSuccess).toEqual({
      type: 'LAYOUT_LOADING_SUCCESS',
      payload: undefined
    })
    expect(loadingFail).toEqual({
      type: 'LAYOUT_LOADING_FAIL',
      payload: {
        error: 'TestError'
      }
    })
  })
  it('should reduce actions', function() {
    const loadingBegin = Layout.Actions.loadingBegin()
    const loadingSuccess = Layout.Actions.loadingSuccess()
    const loadingFail = Layout.Actions.loadingFail('TestError')
    const initState = Layout.reducer()

    expect(initState).toEqual(Layout.initState)

    const afterLoadingBegin = Layout.reducer(initState, loadingBegin)
    expect(afterLoadingBegin).toEqual({
      loading: true,
      error: undefined
    })

    const afterLoadingSuccess = Layout.reducer(
      afterLoadingBegin,
      loadingSuccess
    )
    expect(afterLoadingSuccess).toEqual({
      loading: false,
      error: undefined
    })

    const afterLoadingFail = Layout.reducer(afterLoadingBegin, loadingFail)
    expect(afterLoadingFail).toEqual({
      loading: false,
      error: 'TestError'
    })
  })
})
