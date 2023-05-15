import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTeam = createAsyncThunk('team/getTeam', async () => {
  const response = await fetch('https://reqres.in/api/users?page=2');
  const { data } = await response.json();
  return data;
});

export default getTeam;
