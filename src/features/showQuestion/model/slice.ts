import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { questionsApi } from '@shared/api/questionsApi';

interface Question {
  id: number;
  title: string;
  shortAnswer: string;
  longAnswer: string;
}

interface QuestionsState {
  questions: Question[];
  answers: Record<number, 'know' | 'dontKnow' | null>;
}

const initialState: QuestionsState = {
  questions: [],
  answers: {},
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    answerQuestion: (
      state,
      action: PayloadAction<{ questionId: number; answer: 'know' | 'dontKnow' }>
    ) => {
      const { questionId, answer } = action.payload;
      if (state.answers[questionId] === answer) {
        state.answers[questionId] = null;
      } else {
        state.answers[questionId] = answer;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      questionsApi.endpoints.getQuestions.matchFulfilled,
      (state, action) => {
        state.questions = action.payload.questions;
      }
    );
  },
});

export const { answerQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
