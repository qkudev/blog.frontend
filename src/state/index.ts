import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import * as Layout from './Layout'
import * as Posts from './Posts'

export { Provider } from 'react-redux'
export { Layout, Posts }

const isEnvProduction = process.env.NODE_ENV === 'production'

let middlewares: Middleware[] = [thunk]

if (!isEnvProduction) {
  middlewares.push(logger)
}

export interface IState {
  layout: Layout.IState
  posts: Posts.IState
}

export const initState: IState = {
  layout: Layout.initState,
  posts: Posts.initState
}

const rootReducer = combineReducers({
  layout: Layout.reducer,
  posts: Posts.reducer
})

export const store = createStore(
  rootReducer,
  initState,
  isEnvProduction
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares))
)
