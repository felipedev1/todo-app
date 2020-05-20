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

export function add(description){
  const request = axios.post(URL, { description })
  return [
    { type: 'TODO_ADDED', payload: request },
    search()
  ]
}