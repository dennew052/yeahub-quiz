import type { RootState } from '@app/store';
import { QuestionCard } from '@entities/quiz';
import {
  answerQuestion,
  nextQuestion,
  previousQuestion,
} from '@entities/quiz/model/quizSlice';
import type { Answer, Question } from '@entities/quiz/model/types';
import { AnswerButtons } from '@features/quiz/AnswerButtons';
import { BackButton } from '@features/quiz/BackButton';
import { SkipButton } from '@features/quiz/SkipButton';
import { ToggleAnswerButton } from '@features/quiz/ToggleAnswerButton';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type QuestionFlowProps = {
  questions: Question[];
  onFinish: () => void;
};

export const QuestionFlow = ({ questions, onFinish }: QuestionFlowProps) => {
  const dispatch = useDispatch();
  const [showAnswer, setShowAnswer] = useState(false);

  const currentIndex = useSelector(
    (state: RootState) => state.quiz.currentQuestionIndex
  );

  const selectedAnswers = useSelector(
    (state: RootState) => state.quiz.selectedAnswers
  );

  const total = questions.length;
  const question = questions[currentIndex];
  const isLast = currentIndex === total - 1;

  const currentAnswer = selectedAnswers.find(
    (a) => a.questionId === question.id
  )?.answer;

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
      currentAnswer={currentAnswer}
      showAnswer={showAnswer}
      onToggleAnswer={handleToggleAnswer}
      onAnswer={handleAnswer}
      onBack={handleBack}
      onSkip={handleSkip}
      isLast={isLast}
      onFinish={onFinish}
      ToggleAnswerButton={ToggleAnswerButton}
      AnswerButtons={AnswerButtons}
      BackButton={BackButton}
      SkipButton={SkipButton}
    />
  );
};
