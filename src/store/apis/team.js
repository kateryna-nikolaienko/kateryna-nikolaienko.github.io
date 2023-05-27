import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: (page = 2) => ({
        url: '/users?page=2',
        method: 'GET',
        params: {
          page,
        }
      }),
    }),
  }),
});

export const { useGetTeamQuery } = teamApi;

export default teamApi;
