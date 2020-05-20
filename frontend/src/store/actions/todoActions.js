export function changeDescription(event){
  return {
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
  }
}