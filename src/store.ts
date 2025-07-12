import quizSettingsReducer from '@features/quizSettings/model/slice/quizSettingsSlice';
import questionsReducer from '@features/showQuestion/model/slice';
import { configureStore } from '@reduxjs/toolkit';
import { questionsApi } from '@shared/api/questionsApi';
import { skillsApi } from '@shared/api/skillsApi';

export const store = configureStore({
  reducer: {
    [skillsApi.reducerPath]: skillsApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
    questions: questionsReducer,
    quizSettings: quizSettingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      skillsApi.middleware,
      questionsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
