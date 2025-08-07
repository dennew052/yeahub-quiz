import type { RootState } from '@app/store';
import { useGetQuestionsQuery } from '@entities/quiz/model/questionsApi';
import { QuestionFlow } from '@features/answerQuestion/ui/QuestionFlow';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();

  const quizSettings = useSelector((state: RootState) => state.quizSettings);

  const { specialization, complexity, questionsCount } = quizSettings;

  const { data, isLoading } = useGetQuestionsQuery({
    skills: specialization,
    complexity,
    limit: questionsCount,
  });

  const currentIndex = useSelector(
    (state: RootState) => state.quiz.currentQuestionIndex
  );

  const selectedAnswers = useSelector(
    (state: RootState) => state.quiz.selectedAnswers
  );

  if (isLoading) return <p>Загрузка...</p>;
  if (!data || !data.questions.length) return <p>Нет вопросов</p>;

  const total = data.questions.length;

  const handleFinish = () => {
    navigate('/results');
  };

  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 16 }}>
        <div>
          {currentIndex + 1} / {total}
        </div>
        <div
          style={{
            height: 8,
            background: '#eee',
            borderRadius: 4,
            overflow: 'hidden',
            marginTop: 4,
          }}
        >
          <div
            style={{
              width: `${((currentIndex + 1) / total) * 100}%`,
              background: '#7c3aed',
              height: '100%',
            }}
          />
        </div>
      </div>

      <QuestionFlow questions={data.questions} onFinish={handleFinish} />

      <div style={{ marginTop: 16, fontSize: 14, color: '#888' }}>
        Знаю: {selectedAnswers.filter((a) => a.answer === 'know').length} | Не
        знаю: {selectedAnswers.filter((a) => a.answer === 'dont_know').length}
      </div>
    </div>
  );
};

export default QuizPage;
