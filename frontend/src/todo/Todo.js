import axios from 'axios'
import React, {useState, useEffect} from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'

export default function Todo() {
  const [description, setDescription] = useState('')
  const [list, setList] = useState([])

  useEffect(() => {
    refresh()
  }, [])

  
  const refresh = (search = '') => {
    const config = {
      params: {
        sort: 'createdAt',
        description__regex: search ? `/${search}/` : null
      }
    }
    axios.get(URL, config)
    .then(res => {
      setDescription(search)
      setList(res.data)
    })
  }

  const handleSearch = () => {
    refresh(description)
  }
  
  const handleAdd = () => {
    axios.post(URL, { description })
    .then(res => refresh())
  }
  
  const handleChange = (e) => {
    setDescription(e.target.value)
  }

  const handleRemove = (todo) => {
    axios.delete(`${URL}/${todo._id}`)
      .then(res => refresh(description))
  }

  const handleMarkAsDone = (todo) => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(res => refresh(description))
  }

  const handleMarkAsPending = (todo) => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(res => refresh(description))
  }

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm description={description}
        handleAdd={handleAdd}
        handleChange={handleChange}
        handleSearch={handleSearch} />
      <TodoList list={list} 
        handleRemove={handleRemove}
        handleMarkAsDone={handleMarkAsDone}
        handleMarkAsPending={handleMarkAsPending} />
    </div>
  )
}
