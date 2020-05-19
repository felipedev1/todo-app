import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default function TodoForm(props) {
  return (
    <div role="form" className="todo-form">

      {/* <div className="col-xs-12 col-sm-9 col-md-10"> */}
      <Grid cols="12 9 10">
        <input id="description" type="text" className="form-control"
          placeholder="Adicione uma tarefa"
          value={props.description}
          onChange={props.handleChange} />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton color="primary" icon="plus" 
          onClick={props.handleAdd} />
      </Grid>
    </div>
  )
}
