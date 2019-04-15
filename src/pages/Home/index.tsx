import * as React from 'react'
import { Page, Layout } from '../../components'
import PostList from './PostList'

function Home() {
  return (
    <Page>
      <Layout>
        <PostList />
      </Layout>
    </Page>
  )
}

export default Home
