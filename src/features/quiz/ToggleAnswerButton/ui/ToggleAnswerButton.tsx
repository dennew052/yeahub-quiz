import type { ToggleAnswerButtonProps } from '@entities/quiz/model/types';
import { Button } from '@mui/material';

export const ToggleAnswerButton = ({
  showAnswer,
  onToggle,
}: ToggleAnswerButtonProps) => (
  <Button variant="outlined" onClick={onToggle} sx={{ my: 2 }}>
    {showAnswer ? 'Скрыть ответ' : 'Показать ответ'}
  </Button>
);
