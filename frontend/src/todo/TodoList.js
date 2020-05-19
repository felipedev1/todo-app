import React from 'react'
import IconButton from '../template/IconButton'

export default function TodoList(props) {

  const renderRows = () => {
    return props.list.map(todo => {
        return (
          <tr key={todo._id}>
            <td>{todo.description}</td>
            <td>
              <IconButton color="danger" icon="trash-o" 
                onClick={() => props.handleRemove(todo._id)} />
            </td>
          </tr>
        )
      })
    
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}
