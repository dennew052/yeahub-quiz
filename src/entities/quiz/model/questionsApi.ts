import baseApi from '@shared/api/baseApi';

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query({
      query: ({ skills = 11, complexity, limit = 1 }) =>
        `interview-preparation/quizzes/mock/new?specialization=${skills}&complexity=${complexity}&limit=${limit}`,
    }),
  }),
});
export const { useGetQuestionsQuery } = questionsApi;
