import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type QuizSettings = {
  specialization: number;
  complexity: number[];
  questionsCount: number;
};

const initialState: QuizSettings = {
  specialization: 11,
  complexity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  questionsCount: 1,
};

const quizSettingsSlice = createSlice({
  name: 'quizSettings',
  initialState,
  reducers: {
    setQuizSettings: (_state, action: PayloadAction<QuizSettings>) => {
      return action.payload;
    },
  },
});

export const { setQuizSettings } = quizSettingsSlice.actions;

export const quizSettingsReducer = quizSettingsSlice.reducer;
