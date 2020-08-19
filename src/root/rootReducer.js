import { combineReducers } from 'redux';
import { playReducer } from '../playground/playReducer';
import { globalReducer } from '../components/store/global/globalReducer';
import { companyReducer } from '../components/store/company/companyReducer';

const rootReducer = combineReducers({
  play: playReducer,
  global: globalReducer,
  companies: companyReducer
})

export default rootReducer;