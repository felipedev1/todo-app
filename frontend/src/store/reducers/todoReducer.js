const initialState = {
  description: 'Ler livro',
  list: [
    {
      _id: 1,
      description: 'Implementar redux',
      done: false
    },
    {
      _id: 2,
      description: 'Instalar o redux',
      done: true
    },
    {
      _id: 3,
      description: 'Aprender redux',
      done: true
    }
  ]
}

export function todoReducer(store = initialState, action){
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...store, description: action.payload }
    case 'TODO_SEARCHED':
      return { ...store, list: action.payload.data}
    default:
      return store
  }
}