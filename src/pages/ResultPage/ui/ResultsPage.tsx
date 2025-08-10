import type { RootState } from '@app/store';
import { getAnswersCount } from '@entities/helpers';
import { useSelector } from 'react-redux';

function ResultsPage() {
  const selectedAnswers = useSelector(
    (state: RootState) => state.quiz.selectedAnswers
  );

  const { knowAnswersCount, unknownAnswersCount, totalAnswersCount } =
    getAnswersCount(selectedAnswers);
  return (
    <div className="results-page">
      <h1>Результаты</h1>
      <p>Всего вопросов: {totalAnswersCount}</p>
      <p>Знаю: {knowAnswersCount}</p>
      <p>Не знаю: {unknownAnswersCount}</p>

      <button onClick={() => (window.location.href = '/')}>
        Пройти заново
      </button>
    </div>
  );
}

export default ResultsPage;
