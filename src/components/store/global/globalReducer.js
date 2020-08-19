import { LOADING } from "./globalAction"

const initialState = {
  loading: false
}

export const globalReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING: return { loading: action.payload.isLoading }

    default: { return state }
  }
}
