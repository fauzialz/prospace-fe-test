import { CREATE_COMPANY, DELETE_COMPANY, LOAD_LIST, UPDATE_OFFICE, LOAD_DETAIL } from './companyAction';

const initialState = {
  list: undefined,
  detail: undefined
}

export const companyReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case LOAD_LIST : return { ...state, list: action.payload.companies }
    case LOAD_DETAIL : return { ...state, detail: action.payload.company }
    case CREATE_COMPANY : return { ...state, list: [...state.list, action.payload.data]}
    case DELETE_COMPANY : return { ...state, list: [...state.list.filter(item => item.id !== action.payload.id)] }
    case UPDATE_OFFICE : return { ...state, list: [...state.list.map(item => item.id === action.payload.data.id ? action.payload.data : item )]}

    default: return state;
  }
}