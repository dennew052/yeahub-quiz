import type { UserAnswer } from '@entities/quiz/model/quizSlice';

export const getAnswersCount = (answers: UserAnswer[]) => {
  const knowAnswersCount = answers.filter((a) => a.answer === 'KNOW').length;
  const unknownAnswersCount = answers.filter(
    (a) => a.answer === 'UNKNOWN'
  ).length;
  const totalAnswersCount = answers.length;

  return { knowAnswersCount, unknownAnswersCount, totalAnswersCount };
};
