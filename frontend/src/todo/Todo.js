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

  const handleAdd = () => {
    axios.post(URL, { description })
    .then(res => refresh())
  }
  
  const handleChange = (e) => {
    setDescription(e.target.value)
  }

  const refresh = () => {
    axios.get(`${URL}?sort=createdAt`)
      .then(res => {
      setDescription('')
      setList(res.data)
    })
  }

  const handleRemove = (id) => {
    axios.delete(`${URL}/${id}`)
      .then(res => refresh())
  }

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm description={description}
        handleAdd={handleAdd}
        handleChange={handleChange} />
      <TodoList list={list} handleRemove={handleRemove} />
    </div>
  )
}
