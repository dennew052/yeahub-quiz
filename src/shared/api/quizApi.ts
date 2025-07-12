import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (build) => ({
    getQuizQuestions: build.query({
      query: ({ specializationIds, complexity, limit }) =>
        `/interview-preparation/quizzes/mock/new?specialization=${specializationIds.join(',')}&complexity=${complexity.join(',')}&limit=${limit}`,
    }),
  }),
});

export const { useGetQuizQuestionsQuery } = quizApi;
