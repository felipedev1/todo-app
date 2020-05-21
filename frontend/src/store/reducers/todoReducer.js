const initialState = {
  description: '',
  list: []
}

export function todoReducer(store = initialState, action){
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...store, description: action.payload }
    case 'TODO_SEARCHED':
      return { ...store, list: action.payload}
    case 'TODO_CLEAR':
      return { ...store, description: ''}
    default:
      return store
  }
}