import { combineReducers } from 'redux';
import translates from './translates/reducers';

const rootReducer = combineReducers({
  translates
});

export default rootReducer;
