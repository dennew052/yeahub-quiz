import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type UserAnswer = {
  questionId: number;
  answer: 'KNOW' | 'UNKNOWN';
};

type QuizState = {
  currentQuestionIndex: number;
  selectedAnswers: UserAnswer[];
};

const initialState: QuizState = {
  currentQuestionIndex: 0,
  selectedAnswers: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    answerQuestion: (state, action: PayloadAction<UserAnswer>) => {
      const index = state.selectedAnswers.findIndex(
        (a) => a.questionId === action.payload.questionId
      );
      if (index !== -1) {
        state.selectedAnswers[index] = action.payload;
      } else {
        state.selectedAnswers.push(action.payload);
      }
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    resetQuiz: () => initialState,
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    skipQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
  },
});

export const {
  answerQuestion,
  nextQuestion,
  resetQuiz,
  previousQuestion,
  skipQuestion,
} = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
