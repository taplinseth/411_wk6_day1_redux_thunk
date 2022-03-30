import { createStore } from 'redux'
import reducers from './reducers'
import state from './state'
import { applyMiddleware } from 'redux'

export default createStore(reducers, state, applyMiddleware(thunk))