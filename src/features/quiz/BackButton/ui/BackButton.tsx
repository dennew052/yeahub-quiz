import type { BackButtonProps } from '@entities/quiz/model/types';
import { Button } from '@mui/material';

export const BackButton = ({ onBack, disabled }: BackButtonProps) => (
  <Button onClick={onBack} disabled={disabled}>
    Назад
  </Button>
);
