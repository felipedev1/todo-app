import React, {useEffect} from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, add } from '../store/actions/todoActions'

function TodoForm(props) {
  const { search, add, description, changeDescription } = props

  useEffect(() => {
    search()
  }, [])

  const keyHandler = (e) => {
    if(e.key === 'Enter'){
      e.shiftKey ? search() : add(description)
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
          value={description}
          onKeyUp={keyHandler}
          onChange={changeDescription} />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton color="primary" icon="plus" 
          onClick={() => add(description)} />
        <IconButton color="info" icon="search" 
          onClick={() => search()} />
        <IconButton color="default" icon="close" 
          onClick={props.handleClear} />
      </Grid>
    </div>
  )
}

function mapStateToProps(state){
  return {
    description: state.todo.description
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeDescription, search, add}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)