import { createSlice } from '@reduxjs/toolkit';
import { getTeam } from './actions';

const initialState = {
  teamArray: [],
  isLoading: false,
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeam.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeam.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teamArray = action.payload;
      });
  },
});

export const { saveData } = teamSlice.actions;
export const teamReducer = teamSlice.reducer;

export default teamReducer;
