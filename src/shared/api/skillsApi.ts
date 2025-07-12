import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (build) => ({
    getSpecializations: build.query({
      query: ({ page = 1, limit = 50 }) =>
        `/specializations?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetSpecializationsQuery } = skillsApi;
