import React from 'react'
import IconButton from '../template/IconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending } from '../store/actions/todoActions'

function TodoList(props) {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => {
        return (
          <tr key={todo._id}>
            <td className={todo.done ? 'markedAsDone' : ''}>
              {todo.description}
            </td>
            <td>
              <IconButton hide={todo.done} color="success" icon="check" 
                onClick={() => props.markAsDone(todo)} />
              <IconButton hide={!todo.done} color="warning" icon="undo"
                onClick={() => props.markAsPending(todo)} />
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

function mapStateToProps(state){
  return {
    list: state.todo.list
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({markAsDone, markAsPending}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)