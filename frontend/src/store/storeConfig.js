import { combineReducers, createStore } from 'redux'
import { todoReducer } from './reducers/todoReducer'

const reducers = combineReducers({
  todo: todoReducer
})

function storeConfig(){
  return createStore(reducers)
}

export default storeConfig