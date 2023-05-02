import { configureStore } from '@reduxjs/toolkit';
import translates from './translates/reducers';

const store = configureStore({
  reducer: {
    translates,
  }
});

export default store;
