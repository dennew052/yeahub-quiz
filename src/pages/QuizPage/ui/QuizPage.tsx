import type { RootState } from '@app/store';
import { IntermediateQuestionsResult } from '@entities/quiz';
import { useGetQuestionsQuery } from '@entities/quiz/api/questionsApi';
import { QuestionFlow } from '@widgets/QuestionFlow/ui/QuestionFlow';
import { ProgressBar } from '@shared/ui/ProgressBar';
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
      <ProgressBar currentIndex={currentIndex} total={total} title={'Вопрос'} />

      <QuestionFlow questions={data.questions} onFinish={handleFinish} />

      <IntermediateQuestionsResult selectedAnswers={selectedAnswers} />
    </div>
  );
};

export default QuizPage;
