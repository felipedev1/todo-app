import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default function TodoForm(props) {

  const keyHandler = (e) => {
    if(e.key === 'Enter'){
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if(e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div role="form" className="todo-form">

      {/* <div className="col-xs-12 col-sm-9 col-md-10"> */}
      <Grid cols="12 9 10">
        <input id="description" type="text" className="form-control"
          placeholder="Adicione uma tarefa"
          value={props.description}
          onKeyUp={keyHandler}
          onChange={props.handleChange} />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton color="primary" icon="plus" 
          onClick={props.handleAdd} />
        <IconButton color="info" icon="search" 
          onClick={props.handleSearch} />
        <IconButton color="default" icon="close" 
          onClick={props.handleClear} />
      </Grid>
    </div>
  )
}
