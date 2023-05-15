import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teamArray: []
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    saveData(state, action) {
      state.teamArray = action.payload;
    }
  }
});

export const { saveData } = teamSlice.actions;
export const teamReducer = teamSlice.reducer;

export default teamReducer;
