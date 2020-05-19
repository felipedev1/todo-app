import React from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'

export default function Todo() {
  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm />
    </div>
  )
}
