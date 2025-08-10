import { getAnswersCount } from '@entities/helpers';
import type { UserAnswer } from '@entities/quiz/model/quizSlice';

type IntermediateQuestionsResultProps = {
  selectedAnswers: UserAnswer[];
};

const IntermediateQuestionsResult = ({
  selectedAnswers,
}: IntermediateQuestionsResultProps) => {
  const { knowAnswersCount, unknownAnswersCount } =
    getAnswersCount(selectedAnswers);
  return (
    <div style={{ marginTop: 16, fontSize: 14, color: '#888' }}>
      Знаю: {knowAnswersCount} | Не знаю: {unknownAnswersCount}
    </div>
  );
};

export default IntermediateQuestionsResult;
