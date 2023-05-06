import { combineReducers } from 'redux';
import translationReducer from './translates/reducers';
import teamReducer from './team/reducers';

const rootReducer = combineReducers({
  translations: translationReducer,
  team: teamReducer
});

export default rootReducer;
