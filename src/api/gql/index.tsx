import * as React from 'react'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import { store, Posts } from '../../state'

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI + '/graphql'
})

export function getPosts() {
  const { pagination } = store.getState().posts
  if (pagination && pagination.page === pagination.pages) {
    return
  }

  store.dispatch(Posts.Actions.getPostsBegin())
  let page: number = (pagination && pagination.page + 1) || 1

  return client
    .query({
      query: gql(`
      {
        posts(pagination: { page: ${page} }) {
          docs {
            _id
            body
            createdAt
            updatedAt
          }
          page
          limit
          total
          pages
        }
      }
    `)
    })
    .then(res => {
      const { docs, ...pagination } = res.data.posts
      store.dispatch(Posts.Actions.getPostsSuccess(docs, pagination))
    })
    .catch((err: any) => {
      store.dispatch(Posts.Actions.getPostsFail(err))
    })
}

export default client
