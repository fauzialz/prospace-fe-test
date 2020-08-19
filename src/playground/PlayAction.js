export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const incrementCounter = (props) => {
  const A = 'Coba2men';
  return ({type: INCREMENT, payload: {props, A}})
  // return dispatch => {
  //   dispatch({type: INCREMENT, payload: {props, A}})
  // }
}
export const decrementCounter = (props) => ({type: DECREMENT, payload: {props}})