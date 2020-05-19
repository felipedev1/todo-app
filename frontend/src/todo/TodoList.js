import React from 'react'
import IconButton from '../template/IconButton'

export default function TodoList(props) {

  const renderRows = () => {
    return props.list.map(todo => {
        return (
          <tr key={todo._id}>
            <td className={todo.done ? 'markedAsDone' : ''}>
              {todo.description}
            </td>
            <td>
              <IconButton hide={todo.done} color="success" icon="check" 
                onClick={() => props.handleMarkAsDone(todo)} />
              <IconButton hide={!todo.done} color="warning" icon="undo"
                onClick={() => props.handleMarkAsPending(todo)} />
              <IconButton hide={!todo.done} color="danger" icon="trash-o" 
                onClick={() => props.handleRemove(todo)} />
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
          <th className="table-actions">Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}
