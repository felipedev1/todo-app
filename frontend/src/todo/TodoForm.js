import React from 'react'

export default function TodoForm(props) {
  return (
    <div role="form" className="todo-form">
      <div className="col-xs-12 col-sm-9 col-md-10">
        <input id="description" type="text" className="form-control"
          placeholder="Adicione uma tarefa" />
      </div>

      <div className="col-xs-12 col-sm-3 col-md-2">
        <button className="btn btn-primary">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  )
}
