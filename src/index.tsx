import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Provider, store } from './state'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './components'
import client from './api/gql'
import './style'
import gql from 'graphql-tag'

client
  .query({
    query: gql`
      {
        posts(pagination: { page: 1 }) {
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
    `
  })
  .then(
    res => {
      console.log('Res: ', res)
    },
    err => {
      console.error('Err: ', err)
    }
  )

// @ts-ignore
window.client = client
// @ts-ignore
window.gql = gql

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'production') {
  serviceWorker.register()
} else {
  serviceWorker.unregister()
}
