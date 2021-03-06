import axios from 'axios'
import { Posts, store } from '../state'

const { Actions } = Posts

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URI
})

export async function getPosts() {
  const { pagination } = store.getState().posts
  store.dispatch(Actions.getPostsBegin())

  try {
    const { data } = await client.get('posts', {
      params: { page: (pagination && pagination.page) || undefined }
    })
    store.dispatch(Actions.getPostsSuccess(data.docs, data.pagination))
  } catch (e) {
    store.dispatch(Actions.getPostsFail(e))
  }
}
