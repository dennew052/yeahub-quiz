import type { RootState } from '@app/store';
import { useGetQuestionsQuery } from '@entities/quiz/model/questionsApi';
import { QuestionFlow } from '@features/answerQuestion/ui/QuestionFlow';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const QuizPageContent = () => {
  const navigate = useNavigate();

  const quizSettings = useSelector((state: RootState) => state.quizSettings);
  const { specialization, complexity, questionsCount } = quizSettings;

  const { data, error, isLoading } = useGetQuestionsQuery({
    skills: specialization,
    complexity,
    limit: questionsCount,
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (error || !data?.questions?.length) return <p>Ошибка или нет данных</p>;

  const handleFinish = () => {
    navigate('/results');
  };

  return (
    <div style={{ padding: 24 }}>
      <QuestionFlow questions={data.questions} onFinish={handleFinish} />
    </div>
  );
};

export default QuizPageContent;
