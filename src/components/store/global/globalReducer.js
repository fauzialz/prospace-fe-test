import { SET_LOADING, SET_NOTIFICATION } from "./globalAction"

const initialState = {
  loading: false,
  notification: {
    show: false,
    message: ''
  }
}

export const globalReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING: return { ...state, loading: action.payload.isLoading }
    case SET_NOTIFICATION: return { ...state, notification: {show: action.payload.show, message: action.payload.message} }

    default: { return state }
  }
}
