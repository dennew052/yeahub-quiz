import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: ({ skills = 11, complexity, limit = 1 }) => ({
        url: `interview-preparation/quizzes/mock/new?specialization=${skills}&complexity=${complexity}&limit=${limit}`,
      }),
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
