import { combineReducers, createStore, applyMiddleware } from 'redux'
import { todoReducer } from './reducers/todoReducer'
import promise from 'redux-promise'
import multi from 'redux-multi'

const reducers = combineReducers({
  todo: todoReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

function storeConfig(){
  return applyMiddleware(multi, promise)(createStore)(reducers, devTools)
}

export default storeConfig