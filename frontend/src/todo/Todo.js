import React, {useState} from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'

export default function Todo() {
  const [description, setDescription] = useState('')
  const [list, setList] = useState([])

  const handleAdd = () => {
    console.log(description)
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
