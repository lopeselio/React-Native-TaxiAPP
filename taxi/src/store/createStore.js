import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'
import { createLogger } from 'redux-logger'

const log = createLogger({ diff: true, collapsed: true })
// a function to create the store and auto persist the data
export default (initialState = {}) => {

    //Middleware 
    const middleware = [thunk, log]

    //Store Enhancers
    const enhancers = []

    //Store Instantiation
    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    )
    return store
}