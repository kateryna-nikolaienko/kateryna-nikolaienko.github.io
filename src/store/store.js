import { configureStore } from '@reduxjs/toolkit';
import translatesReducer from './translates/reducers';
import teamApi from './apis/team';

const store = configureStore({
  reducer: {
    [teamApi.reducerPath]: teamApi.reducer,
    translates: translatesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat([
      teamApi.middleware,
    ])
});

export default store;
