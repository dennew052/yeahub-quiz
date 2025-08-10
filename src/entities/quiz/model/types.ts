import type { ComponentType } from 'react';

export type Question = {
  id: number;
  title: string;
  description: string;
  longAnswer: string;
};

export type Answer = 'KNOW' | 'UNKNOWN';

export interface ToggleAnswerButtonProps {
  showAnswer: boolean;
  onToggle: () => void;
}

export interface AnswerButtonsProps {
  currentAnswer?: Answer;
  onAnswer: (answer: Answer) => void;
}

export interface BackButtonProps {
  onBack: () => void;
  disabled: boolean;
}

export interface SkipButtonProps {
  onSkip: () => void;
}

export type QuestionCardProps = {
  question: Question;
  currentIndex: number;
  currentAnswer?: Answer;
  showAnswer: boolean;
  onToggleAnswer: () => void;
  onAnswer: (answer: Answer) => void;
  onBack: () => void;
  onSkip: () => void;
  isLast: boolean;
  onFinish: () => void;
  ToggleAnswerButton: ComponentType<ToggleAnswerButtonProps>;
  AnswerButtons: ComponentType<AnswerButtonsProps>;
  BackButton: ComponentType<BackButtonProps>;
  SkipButton: ComponentType<SkipButtonProps>;
};
