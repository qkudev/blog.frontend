import * as React from 'react'
import InfiniteScroller from 'react-infinite-scroller'
import { connect } from 'react-redux'
import * as State from '../../../state'
import { Post, Spinner } from '../../../components'
import * as API from '../../../api'

type Props = State.Posts.IState

function FailMessage() {
  return <h1 style={{ textAlign: 'center' }}>Failed to fetch posts :(</h1>
}

class PostList extends React.Component<Props> {
  render() {
    const { loading, error, allIds, byId, pagination } = this.props
    if (error) {
      return <FailMessage />
    }
    return (
      <InfiniteScroller
        loadMore={API.getPosts}
        hasMore={
          !loading &&
          !error &&
          (!pagination || pagination.page < pagination.pages)
        }
        loader={<Spinner key='spinner' />}
      >
        {allIds.map(id => (
          <Post key={id} {...byId[id]} />
        ))}
      </InfiniteScroller>
    )
  }
}

const mapStateToProps = (state: State.IState) => ({
  ...state.posts
})

export default connect(mapStateToProps)(PostList)
