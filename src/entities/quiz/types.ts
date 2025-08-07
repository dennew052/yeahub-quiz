export type Question = {
  id: number;
  title: string;
  description: string;
  longAnswer: string;
};

export type Answer = 'know' | 'dont_know';

export type QuestionCardProps = {
  question: Question;
  currentIndex: number;
  total: number;
  currentAnswer?: Answer;
  showAnswer: boolean;
  onToggleAnswer: () => void;
  onAnswer: (answer: Answer) => void;
  onBack: () => void;
  onSkip: () => void;
  isLast: boolean;
  onFinish: () => void;
};
