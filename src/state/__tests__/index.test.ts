import * as State from '../index'

describe('State', function() {
  it('should be equal to initial state', function() {
    expect(State.store.getState()).toEqual({
      layout: State.Layout.initState,
      posts: State.Posts.initState
    })
  })
})
