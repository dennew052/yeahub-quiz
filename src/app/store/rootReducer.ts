import { quizSettingsReducer } from '@entities/quiz/model/quizSettingsSlice';
import { quizReducer } from '@entities/quiz/model/quizSlice';
import baseApi from '@shared/api/baseApi';

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  quiz: quizReducer,
  quizSettings: quizSettingsReducer,
};
