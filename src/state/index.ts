import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

const isEnvProduction = process.env.NODE_ENV === 'production'

let middlewares: Middleware[] = [thunk]

if (!isEnvProduction) {
  middlewares.push(logger)
}

export interface IState {
}

export const initState: IState = {}

const rootReducer = combineReducers({})

export const store = createStore(
  rootReducer,
  initState,
  isEnvProduction
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares))
)
