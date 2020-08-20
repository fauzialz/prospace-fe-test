export const SET_LOADING = '@@SET_LOADING';
export const SET_NOTIFICATION = '@@SET_NOTIFICATION';

export const setLoading = (isLoading) => ({type: SET_LOADING, payload: {isLoading}})
export const setNotification = (message) => {
  return dispatch => {
    dispatch({type: SET_NOTIFICATION, payload: {message, show: true}})
    setTimeout(() => {
      dispatch({type: SET_NOTIFICATION, payload: {message: '', show: false}})
    }, 3000);
  }
}