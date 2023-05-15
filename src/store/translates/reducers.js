import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../i18n';

export const initialState = {
  locale: i18n.language
};

const translatesSlice = createSlice({
  name: 'translates',
  initialState,
  reducers: {
    toggleLocale(state, action) {
      state.locale = action.payload;
    }
  }
});

export const { toggleLocale } = translatesSlice.actions;
export const translates = translatesSlice.reducer;
export default translates;
