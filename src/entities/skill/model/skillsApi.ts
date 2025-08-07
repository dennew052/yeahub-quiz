import baseApi from '@shared/api/baseApi';

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query({
      query: ({ page = 1, limit = 50 }) =>
        `/specializations?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
