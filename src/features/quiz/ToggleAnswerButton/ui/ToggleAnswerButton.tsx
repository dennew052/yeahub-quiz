import { Button } from '@mui/material';

interface ToggleAnswerButtonProps {
  showAnswer: boolean;
  onToggle: () => void;
}

export const ToggleAnswerButton = ({
  showAnswer,
  onToggle,
}: ToggleAnswerButtonProps) => (
  <Button variant="outlined" onClick={onToggle} sx={{ my: 2 }}>
    {showAnswer ? 'Скрыть ответ' : 'Показать ответ'}
  </Button>
);
