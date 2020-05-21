import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'


export function changeDescription(event){
  return {
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
  }
}

export function search(){
  return function(dispatch, getState){
    const description = getState().todo.description
    const config = {
      params: {
        sort: 'createdAt',
        description__regex: description ? `/${description}/i` : null
      }
    }
    axios.get(URL, config)
      .then(res => dispatch({type: 'TODO_SEARCHED', payload: res.data}))
  }
}

export function add(description) {
  return function(dispatch){
    axios.post(URL, { description })
      .then(res => dispatch(clear()))
      .then(res => dispatch(search()))
  }
}

export function markAsDone(todo) {
  return function(dispatch) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
      .then(res => dispatch(search()))
  }
}

export function markAsPending(todo) {
  return function(dispatch) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false})
      .then(res => dispatch(search()))
  }
}

export function remove(todo){
  return function(dispatch) {
    axios.delete(`${URL}/${todo._id}`)
      .then(res => dispatch(search()))
  }
}

export function clear(){
  return [
    { type: 'TODO_CLEAR' },
    search()
  ]
}