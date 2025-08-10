import type { SkipButtonProps } from '@entities/quiz/model/types';
import { Button } from '@mui/material';

export const SkipButton = ({ onSkip }: SkipButtonProps) => (
  <Button onClick={onSkip} variant="text">
    Пропустить
  </Button>
);
