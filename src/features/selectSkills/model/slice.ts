import { createSlice } from '@reduxjs/toolkit';

const selectedSkillsSlice = createSlice({
  name: 'selectedSkills',
  initialState: [] as number[],
  reducers: {
    toggleSkill: (state, action) => {
      const skillId = action.payload;
      if (state.includes(skillId)) {
        return [];
      } else {
        return [skillId];
      }
    },
    clearSkills: () => [],
  },
});

export const { toggleSkill, clearSkills } = selectedSkillsSlice.actions;
export default selectedSkillsSlice.reducer;
