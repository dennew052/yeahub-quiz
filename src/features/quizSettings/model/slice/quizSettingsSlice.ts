import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface QuizSettingsState {
  selectedSkills: number[];
  selectedComplexity: string[];
  limit: number;
}

const initialState: QuizSettingsState = {
  selectedSkills: [],
  selectedComplexity: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  limit: 1,
};

const quizSettingsSlice = createSlice({
  name: 'quizSettings',
  initialState,
  reducers: {
    toggleSkill(state, action: PayloadAction<number>) {
      const skillId = action.payload;
      if (state.selectedSkills.includes(skillId)) {
        state.selectedSkills = state.selectedSkills.filter(
          (id) => id !== skillId
        );
      } else {
        state.selectedSkills.push(skillId);
      }
    },
    toggleComplexity(state, action: PayloadAction<string>) {
      const complexity = action.payload;
      if (state.selectedComplexity.includes(complexity)) {
        state.selectedComplexity = state.selectedComplexity.filter(
          (c) => c !== complexity
        );
      } else {
        state.selectedComplexity.push(complexity);
      }
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    clearSkills(state) {
      state.selectedSkills = [];
    },
    clearComplexity(state) {
      state.selectedComplexity = [];
    },
    reset(state) {
      state.selectedSkills = [];
      state.selectedComplexity = [];
      state.limit = 1;
    },
  },
});

export const {
  toggleSkill,
  toggleComplexity,
  setLimit,
  clearSkills,
  clearComplexity,
  reset,
} = quizSettingsSlice.actions;

export default quizSettingsSlice.reducer;
