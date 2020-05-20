import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'


export function changeDescription(event){
  return {
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
  }
}

export function search(){
  const config = {
    params: {
      sort: 'createdAt'
    }
  }
  const request = axios.get(URL, config)
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}

export function add(description) {
  return function(dispatch){
    axios.post(URL, { description })
      .then(res => dispatch({ type: 'TODO_ADDED', payload: res.data}))
      .then(res => dispatch(search()))
  }
}