import { configureStore } from '@reduxjs/toolkit';
import translates from './translates/reducers';
import team from './team/reducers';

const store = configureStore({
  reducer: {
    translates,
    team
  }
});

export default store;
