import type { RootState } from '@app/store';
import { useSelector } from 'react-redux';

function ResultsPage() {
  const answers = useSelector((state: RootState) => state.quiz.selectedAnswers);

  const knowCount = answers.filter((a) => a.answer === 'know').length;
  const dontKnowCount = answers.filter((a) => a.answer === 'dont_know').length;
  const total = answers.length;

  return (
    <div className="results-page">
      <h1>Результаты</h1>
      <p>Всего вопросов: {total}</p>
      <p>Знаю: {knowCount}</p>
      <p>Не знаю: {dontKnowCount}</p>

      <button onClick={() => (window.location.href = '/')}>
        Пройти заново
      </button>
    </div>
  );
}

export default ResultsPage;
