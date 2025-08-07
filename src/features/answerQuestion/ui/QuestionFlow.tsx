import type { RootState } from '@app/store';
import {
  answerQuestion,
  nextQuestion,
  previousQuestion,
} from '@entities/quiz/model/quizSlice';
import { QuestionCard } from '@entities/quiz/ui/QuestionCard';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { Answer, QuestionFlowProps, SelectedAnswer } from '../types';

export const QuestionFlow = ({ questions, onFinish }: QuestionFlowProps) => {
  const dispatch = useDispatch();
  const [showAnswer, setShowAnswer] = useState(false);

  const currentIndex = useSelector(
    (state: RootState) => state.quiz.currentQuestionIndex
  );

  const selectedAnswers = useSelector(
    (state: RootState) => state.quiz.selectedAnswers as SelectedAnswer[]
  );

  const total = questions.length;
  const question = questions[currentIndex];
  const isLast = currentIndex === total - 1;

  const currentAnswer = selectedAnswers.find(
    (a) => a.questionId === question.id
  )?.answer as Answer | undefined;

  const handleAnswer = (answer: Answer) => {
    dispatch(answerQuestion({ questionId: question.id, answer }));
    setTimeout(() => {
      if (isLast) {
        onFinish();
      } else {
        dispatch(nextQuestion());
        setShowAnswer(false);
      }
    }, 150);
  };

  const handleBack = () => {
    dispatch(previousQuestion());
    setShowAnswer(false);
  };

  const handleSkip = () => {
    dispatch(nextQuestion());
    setShowAnswer(false);
  };

  const handleToggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <QuestionCard
      question={question}
      currentIndex={currentIndex}
      total={total}
      currentAnswer={currentAnswer}
      showAnswer={showAnswer}
      onToggleAnswer={handleToggleAnswer}
      onAnswer={handleAnswer}
      onBack={handleBack}
      onSkip={handleSkip}
      isLast={isLast}
      onFinish={onFinish}
    />
  );
};
