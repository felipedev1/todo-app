import { combineReducers, createStore } from 'redux'
import { todoReducer } from './reducers/todoReducer'

const reducers = combineReducers({
  todo: todoReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

function storeConfig(){
  return createStore(reducers, devTools)
}

export default storeConfig