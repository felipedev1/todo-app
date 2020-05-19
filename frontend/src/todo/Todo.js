import axios from 'axios'
import React, {useState} from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'

const URL = 'http://localhost:3003/api/todos'

export default function Todo() {
  const [description, setDescription] = useState('')
  const [list, setList] = useState([])

  const handleAdd = () => {
    axios.post(URL, { description })
      .then(res => console.log(res.data))
  }

  const handleChange = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm description={description}
        handleAdd={handleAdd}
        handleChange={handleChange} />
    </div>
  )
}
