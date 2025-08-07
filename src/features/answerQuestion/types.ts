export type Question = {
  id: number;
  title: string;
  description: string;
  longAnswer: string;
};

export type Answer = 'know' | 'dont_know';

export type SelectedAnswer = {
  questionId: number;
  answer: Answer;
};

export type QuestionFlowProps = {
  questions: Question[];
  onFinish: () => void;
};
