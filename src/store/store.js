import { configureStore } from '@reduxjs/toolkit';
import translatesReducer from './translates/reducers';
import teamReducer from './team/reducers';

const store = configureStore({
  reducer: {
    translates: translatesReducer,
    team: teamReducer
  }
});

export default store;
