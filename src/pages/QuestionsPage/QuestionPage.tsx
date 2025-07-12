import type { RootState } from '@/store';
import { useGetQuestionsQuery } from '@shared/api/questionsApi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { answerQuestion } from '@features/showQuestion/model/slice';
import Results from '@features/showQuestion/ui/Results';

export function QuestionPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedSkills, selectedComplexity, limit } = useSelector(
    (state: RootState) => state.quizSettings
  );
  const answers = useSelector((state: RootState) => state.questions.answers);
  const questions = useSelector(
    (state: RootState) => state.questions.questions
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, error, isLoading } = useGetQuestionsQuery({
    skills: selectedSkills.join(','),
    complexity: selectedComplexity.join(','),
    limit,
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: 'questions/fetchQuestions', payload: data });
    }

    if (error) {
      alert('Ошибка загрузки вопросов');
      navigate('/');
    }
  }, [data, error, dispatch, navigate]);

  if (isLoading) return <div>Загрузка...</div>;

  if (!isLoading && questions.length === 0) {
    return <div>Вопросы не найдены</div>;
  }

  if (currentIndex >= questions.length) {
    return <Results questions={questions} answers={answers} />;
  }

  const currentQuestion = questions[currentIndex];
  const userAnswer = answers[currentQuestion?.id] ?? null;

  const onAnswerClick = (type: 'know' | 'dontKnow') => {
    dispatch(answerQuestion({ questionId: currentQuestion.id, answer: type }));
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setCurrentIndex(questions.length);
    }
  };

  return (
    <div>
      <h2>{currentQuestion.title}</h2>

      <div style={{ marginBottom: '10px' }}>
        <button
          style={{ backgroundColor: userAnswer === 'know' ? 'lightgreen' : '' }}
          onClick={() => onAnswerClick('know')}
        >
          Знаю
        </button>
        <button
          style={{
            backgroundColor: userAnswer === 'dontKnow' ? 'lightcoral' : '',
            marginLeft: '10px',
          }}
          onClick={() => onAnswerClick('dontKnow')}
        >
          Не знаю
        </button>
      </div>

      <details>
        <summary>Показать ответ</summary>
        <div
          dangerouslySetInnerHTML={{
            __html: currentQuestion.longAnswer || currentQuestion.shortAnswer,
          }}
        />
      </details>

      <div style={{ marginTop: 20 }}>
        <button onClick={nextQuestion} disabled={!userAnswer}>
          {currentIndex === questions.length - 1 ? 'Завершить' : 'Далее'}
        </button>
      </div>
    </div>
  );
}
